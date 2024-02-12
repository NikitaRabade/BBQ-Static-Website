/*menu */

/*
document.addEventListener('DOMContentLoaded', function () {
    // Get all menu list items
    var menuItems = document.querySelectorAll('.menu-list-item');
  
    // Get all menu content elements
    var menuContents = document.querySelectorAll('.menu-content');
  
    // Show the default active content
    var defaultActiveIndex = 0;
    menuItems[defaultActiveIndex].classList.add('active-btn');
    menuContents[defaultActiveIndex].classList.add('active-menu-items');
  
    // Add click event listener to each menu item
    menuItems.forEach(function (menuItem, index) {
      menuItem.addEventListener('click', function () {
        // Remove 'active-btn' class from all menu items
        menuItems.forEach(function (item) {
          item.classList.remove('active-btn');
        });
  
        // Add 'active-btn' class to the clicked menu item
        menuItem.classList.add('active-btn');
  
        // Hide all menu contents
        menuContents.forEach(function (content) {
          content.classList.remove('active-menu-items');
        });
  
        // Show the corresponding menu content
        menuContents[index].classList.add('active-menu-items');

      });
    });
  });
  */

  document.addEventListener('DOMContentLoaded', function () {
    // Function to handle menu items and contents
    function handleMenu(menuItemsSelector, menuContentsSelector) {
        var menuItems = document.querySelectorAll(menuItemsSelector);
        var menuContents = document.querySelectorAll(menuContentsSelector);

        // Show the default active content
        var defaultActiveIndex = 0;
        menuItems[defaultActiveIndex].classList.add('active-btn');
        menuContents[defaultActiveIndex].classList.add('active-menu-items');

        // Add click event listener to each menu item
        menuItems.forEach(function (menuItem, index) {
            menuItem.addEventListener('click', function () {
                // Remove 'active-btn' class from all menu items
                menuItems.forEach(function (item) {
                    item.classList.remove('active-btn');
                });

                // Add 'active-btn' class to the clicked menu item
                menuItem.classList.add('active-btn');

                // Hide all menu contents
                menuContents.forEach(function (content) {
                    content.classList.remove('active-menu-items');
                });

                // Show the corresponding menu content
                menuContents[index].classList.add('active-menu-items');
            });
        });
    }

    // Call the function for the first set of menu items and contents
    handleMenu('.menu-list-item', '.menu-content');

    // Call the function for the second set of menu items and contents
    handleMenu('.menu-dropdown-list-item', '.menu-content');
});

  
/*menu-dropdown-nav */
/*
document.addEventListener('DOMContentLoaded', function () {
  var button = document.querySelector('.menu-navbar-open-btn');
  var menuDropdown = document.querySelector('.menu-dropdown-nav');

  button.addEventListener('click', function () {
      menuDropdown.classList.toggle('menu-dropdown-visible');
      button.classList.toggle('navbar-close-btn');
  });
});

*/

document.addEventListener('DOMContentLoaded', function () {
  var button = document.querySelector('.menu-navbar-open-btn');
  var menuDropdown = document.querySelector('.menu-dropdown-nav');
  var menuItems = document.querySelectorAll('.menu-dropdown-list-item');

  button.addEventListener('click', function () {
      menuDropdown.classList.toggle('menu-dropdown-visible');
      button.classList.toggle('navbar-close-btn');
  });

  menuItems.forEach(function (menuItem) {
      menuItem.addEventListener('click', function () {
          menuDropdown.classList.remove('menu-dropdown-visible');
          button.classList.remove('navbar-close-btn');
      });
  });
});
