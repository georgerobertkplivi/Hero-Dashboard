# Test Run Instructions

## How to Run the Test

1. Unzip the repository onto your laptop using the following:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd <project-directory>
    ```

3. Open a terminal in the project directory.

4. Run the following command to install all project dependencies:

    ```bash
    npm install
    ```

5. Deploy the project by running the command:

    ```bash
    npm start
    ```

## Running the Test Commands

- To run all tests in Headless mode, use the following command:

    ```bash
    npx playwright test
    ```

- To run all tests in Headed mode using Chromium, execute:

    ```bash
    npx playwright test --project=chromium --headed
    ```


- To run all tests related to "create.spec.js" in Headed mode using Chromium:

    ```bash
     npx playwright test tests/create.spec.js --project=chromium --headed
    ```

## Additional Commands

- To open the last HTML report, run:

    ```bash
    npx playwright show-report
    ```

## Additional Information

- Page Object Directory:

    ```bash
    angular-heros-main/pages
    ```

- Tests Directory:

    ```bash
    angular-heros-main/tests
    ```

## Command Reference

- `npx playwright test`: Runs the end-to-end tests.
- `npx playwright test --project=chromium`: Runs the tests only on Desktop Chrome.
- `npx playwright test --project=firefox`: Runs the tests only on Desktop Firefox.
