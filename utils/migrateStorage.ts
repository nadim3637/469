import { storage } from './storage';

export const migrateStorage = async () => {
  const isMigrated = await storage.getItem('nst_storage_migrated');
  if (isMigrated) {
    console.log("Storage already migrated.");
    return;
  }

  console.log("Starting storage migration...");
  
  const keysToMigrate = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('nst_')) {
      keysToMigrate.push(key);
    }
  }

  for (const key of keysToMigrate) {
    try {
      const value = localStorage.getItem(key);
      if (value) {
        // Try parsing JSON, otherwise store as string
        try {
            const parsed = JSON.parse(value);
            await storage.setItem(key, parsed);
        } catch (e) {
            await storage.setItem(key, value);
        }
        console.log(`Migrated ${key}`);
      }
    } catch (e) {
      console.error(`Failed to migrate ${key}`, e);
    }
  }

  await storage.setItem('nst_storage_migrated', 'true');
  console.log("Storage migration complete.");
};
