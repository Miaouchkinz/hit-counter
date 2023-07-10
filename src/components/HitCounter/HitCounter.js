import { readFile, writeFile } from '../../helpers/file-helpers';

const DATABASE_PATH = '/src/database.json';

function HitCounter() {
  /* CAVEAT - This won't work in production.
   * In Prod, the deployed files are read-only. When we try to update the # of hits in our database.json file,
   * an error would be thrown, since Node isn't allowed to write to any files.
   *
   * IRL, we'd want to use a database to store this information.
   */
  let { hits } = JSON.parse(readFile(DATABASE_PATH));

  hits += 1;

  writeFile(DATABASE_PATH, JSON.stringify({ hits }));

  return hits;
}

export default HitCounter;
