console.log('Testing module system...\n');

try {
  console.log('import.meta.url:', import.meta.url);
} catch (e) {
  console.log('import.meta.url failed (likely CommonJS)');
}

try {
  console.log('__filename:', __filename);
} catch (e) {
  console.log('__filename failed (likely ESM)');
}