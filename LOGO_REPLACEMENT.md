# How to Replace the Logo

The application currently uses a placeholder SVG logo. When you're ready to use your actual logo from Google Drive, follow these steps:

## Steps to Replace Logo

1. **Download your logo** from Google Drive:
   - Link: https://drive.google.com/file/d/1sbUMiNfolgrIJcMlGxHvmYJpZJMSmOAL/view?usp=drivesdk
   - Download the file to your computer

2. **Replace the logo file:**
   ```bash
   # Navigate to the assets directory
   cd assets/
   
   # Remove the placeholder logo
   rm logo.svg
   
   # Copy your logo file
   # If it's an SVG:
   cp /path/to/your/logo.svg logo.svg
   
   # If it's PNG/JPG, you can also use it:
   cp /path/to/your/logo.png logo.png
   # Then update index.html to reference logo.png instead of logo.svg
   ```

3. **If your logo is PNG/JPG** instead of SVG:
   - Update line 16 in `index.html`:
   ```html
   <!-- Change from: -->
   <img src="assets/logo.svg" alt="napster Logo" class="logo-img">
   
   <!-- To: -->
   <img src="assets/logo.png" alt="napster Logo" class="logo-img">
   <!-- or logo.jpg if it's a JPEG -->
   ```

4. **Adjust logo size if needed:**
   - The logo is currently sized at 40x40 pixels
   - To change this, edit `styles/main.css` around line 59:
   ```css
   .logo-img {
       width: 40px;    /* Change these values */
       height: 40px;
       border-radius: 8px;
   }
   ```

5. **Replace the icon (favicon) as well:**
   ```bash
   # Similar process for the icon
   rm assets/icon.svg
   cp /path/to/your/icon.svg assets/icon.svg
   
   # Update line 8 in index.html if using PNG:
   <link rel="icon" type="image/png" href="assets/icon.png">
   ```

## Recommended Logo Specifications

- **Format:** SVG (preferred) or PNG with transparent background
- **Size:** Square aspect ratio (e.g., 200x200px, 512x512px)
- **Colors:** Should work with the app's purple (#6B5B95) theme
- **Icon:** Should be recognizable at small sizes (16x16px to 64x64px)

## Testing After Replacement

1. Refresh your browser
2. Check that the logo appears in the navigation bar
3. Check that the favicon appears in the browser tab
4. Verify it looks good on both light and dark backgrounds

## Need Help?

If you encounter any issues replacing the logo, you can:
1. Open an issue on GitHub
2. Check that the file path is correct
3. Verify the image file isn't corrupted
4. Make sure the CSS sizing is appropriate for your logo dimensions
