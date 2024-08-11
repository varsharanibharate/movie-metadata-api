import fs from 'fs';
import path from 'path';
import csvParser from 'csv-parser';
import pool from './database';

const seedDatabase = async () => {
  const filePath = path.join(__dirname, '../../data/movies.csv');
  const results: any[] = [];

  // Reading the CSV file
  fs.createReadStream(filePath)
    .pipe(csvParser())
    .on('data', (data) => {
        console.log('Read row:', data); 
        results.push({
            title: data.title || 'Unknown Title',
            description: data.overview || 'No Description',
            genre: data.genres || 'Unknown Genre',
            release_date: data.release_date || '1900-01-01',
        });
      })
    .on('end', async () => {
       // console.log('Data to insert:', results); 
      // Insert each movie into the database
      for (const movie of results) {
        try {
          await pool.query(
            'INSERT INTO movies (title, genre, release_date, description) VALUES (?, ?, ?, ?)',
            [movie.title, movie.genre, movie.release_date, movie.description]
          );
        } catch (error) {
          console.error('Error inserting data:', error);
        }
      }
      console.log('Database seeding completed!');
    });
};

// Executed the seeding function
seedDatabase().catch(console.error);
