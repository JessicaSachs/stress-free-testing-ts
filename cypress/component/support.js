// Cypress Testing Library - https://testing-library.com/docs/cypress-testing-library/intro/
import '@testing-library/cypress/add-commands'

// The Cypress support.js file is loaded *once per spec* and contains global setup and teardown.

// *Workshop Task*: Fix the application's styles.

// 1. Look inside of src/main.js and import any other global styles.
import 'virtual:windi.css'
import 'virtual:windi-devtools'

// 2. Import main.scss here.
import '../../src/main.scss'
