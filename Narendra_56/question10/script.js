<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Card with Flip Effect</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <div class="card-container">
    <div class="card" id="card">
      <div class="card-inner">
        <!-- Front Side -->
        <div class="card-front">
          <img src="C:\Users\shiva\OneDrive\Desktop\mru logo.png" alt="Image" class="card-image">
          <h2 class="card-title">Card Title</h2>
          <button class="more-info-btn">More Info</button>
        </div>
        
        <!-- Back Side -->
        <div class="card-back">
          <p>This is the back side of the card. You can add more details here.</p>
          <button class="toggle-btn" id="toggle-btn">Flip Back</button>
          <img src="C:\Users\shiva\OneDrive\Desktop\mru logo.png" alt="Image" class="card-image">
        </div>
      </div>
    </div>
  </div>

  <script src="index.js"></script>
</body>
</html>