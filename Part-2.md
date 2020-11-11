## Part 2
- Time to refactor the code base to make your app more organised and easier to maintain
    - Move db connection into its own connection file
    - Move routes into its own route folder
    - Move models into its own models folder
- Refactor the restaurants model to have cuisines as a separate model
    - Restaurant should contain an array of cuisines objects
    - Updates routes and views to cater for the new cuisines model
        - Allow users to CREATE/READ/UPDATE/DELETE individual cuisines
        - Allow users to add/remove cuisines from each restaurant
- Create a seed file for your restaurants and cuisines

## Further (Optional)
- Add other data features to your restaurant 
- Examples
    - suitable_for: large groups, dates, family, kids
    - promos: 1-for-1, 20% off total bill, free dessert, set-lunch
    - dishes: nasi lemak, ramen, bagels

## Submission
Submit a pull request once Part 2 is complete.
