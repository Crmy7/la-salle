<template>
  <div class="preloader" data-preloader aria-hidden="true">
    <!-- Couche du dessous : le nom sombre sur fond clair -->
    <div class="preloader__layer">
      <span class="preloader__wrap"><span class="preloader__mark" data-preloader-mark>La Salle</span></span>
    </div>

    <!-- Couche du dessus : le même nom en négatif, révélé par un balayage rouge -->
    <div class="preloader__layer preloader__layer--fill" data-preloader-fill>
      <span class="preloader__wrap"><span class="preloader__mark" data-preloader-mark>La Salle</span></span>
    </div>

    <span class="preloader__city" data-preloader-city>La Roche-sur-Foron</span>
  </div>
</template>
