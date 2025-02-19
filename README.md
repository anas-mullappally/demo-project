# Manipal Community Connect Demo

Manipal Community Connect Demo is a [Next.js](https://nextjs.org/) project that clones the Manipal Community Connect website. This project replicates the key functionalities and design elements of the original site. 

## Tech Stack 
Next.js, Shadcn, Tailwind, Zustand, Firebase

## Usage
1. Clone the repository 
   ```
   git clone https://github.com/anas-mullappally/demo-project.git
   ```

2. Install Dependencies:
    ```
       cd demo-project
       npm install
    ```

3. Setup Environment Variables
    1. Create a .env.local file in the root directory of your project.
    2. Add the following environment variables to the .env.local file:
    ```
        NEXT_PUBLIC_GOOGLE_API = 
        NEXT_PUBLIC_AUTH_DOMAIN = 
        NEXT_PUBLIC_PROJECT_ID = 
        NEXT_PUBLIC_STORAGE_BUCKET = 
        NEXT_PUBLIC_SENDER_ID = 
        NEXT_PUBLIC_APP_ID = 
    ```
    Replace the placeholder values (your_google_api_key, your_auth_domain, etc.) with the actual values from your Firebase project.

4. Run the project
    ```bash
        npm run dev
        # or
        yarn dev
        # or
        pnpm dev
        # or
        bun dev
    ```
     Open [http://localhost:3000](http://localhost:3000) with your browser to see the result


## License

[MIT](https://choosealicense.com/licenses/mit/)
