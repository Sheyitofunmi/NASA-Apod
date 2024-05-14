
```markdown
# NASA APOD Viewer

This is a React application that fetches and displays NASA's Astronomy Picture of the Day (APOD). Users can select a date to view the corresponding APOD along with additional information about the photo.

## Features

- **Date Picker:** Users can select a date to view the APOD for that day.
- **Navbar:** Sticky navigation bar with links to different sections of the application.
- **Hero Section:** Introduction section with a brief description.
- **Photo Section:** Displays the APOD image or video along with its description.
- **Image Gallery:** Displays a gallery of APODs for a range of dates.
- **Footer:** Contains additional links and information.

## Technologies Used

- React
- TypeScript
- Flatpickr for date picking
- Axios for API requests
- Tailwind CSS for styling
- Moment.js for date manipulation

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Sheyitofunmi/NASA-Apod/.git
   cd nasa-apod
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the application:**
   ```sh
   npm start
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Use the date picker in the navbar to select a date. The application will fetch and display the APOD for the selected date.
3. Scroll through the different sections using the navigation links in the navbar.

## Configuration

The date picker is configured with the following options:

- `altInput: true` - Displays an alternative input field with a formatted date.
- `dateFormat: "Y-m-d"` - The format for the input date (ISO format).
- `altFormat: "d-m-Y"` - The format for the displayed date (day-month-year).
- `allowInput: true` - Allows manual input of the date.
- `parseDate` and `formatDate` using Moment.js for custom date parsing and formatting.

## File Structure

- **src/components:**
  - **DateInput.tsx:** Component for the date picker input.
  - **Photo.tsx:** Component to display the APOD.
  - **ImageGallery.tsx:** Component to display a gallery of APODs.
  - **Navbar.tsx:** Component for the navigation bar.
  - **Hero.tsx:** Component for the hero section.
  - **Footer.tsx:** Component for the footer.

- **src/api:**
  - **apod.ts:** Contains the API call to fetch APOD data.

- **src/App.tsx:** Main application component.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [NASA APOD API](https://api.nasa.gov/) for providing the Astronomy Picture of the Day data.
- [Flatpickr](https://flatpickr.js.org/) for the date picker component.
- [Tailwind CSS](https://tailwindcss.com/) for styling.
- [Moment.js](https://momentjs.com/) for date manipulation.

```

