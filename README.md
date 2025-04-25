# Codeverse

This is the Codeverse React application.

## Installation

To install the dependencies, run:

```bash
npm install
```

## Running the app

To start the development server, run:

```bash
npm start
```

This will launch the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Building the app

To build the app for production, run:

```bash
npm run build
```

The build output will be in the `build` folder.

## Testing

To run tests, use:

```bash
npm test
```

## Technologies Used

- React
- Tailwind CSS
- EmailJS

## Environment Variables

This project uses environment variables to configure certain settings. To set the contact email used in the Contact Us form, create a `.env` file in the root of the project with the following content:

```
REACT_APP_CONTACT_EMAIL=your-email@example.com
```

Replace `your-email@example.com` with the desired email address to receive contact form submissions.

After creating or updating the `.env` file, restart the development server to apply the changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
