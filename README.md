We've built a number of simple apps now, but they've all been a single page. Let's combine your new found knowledge of fetch with page.js to create multiple pages.

After completing this assignment, you should now:

* Understand the basics of routing
* Be comfortable using APIs that require authentication

## What to Submit

1. A link to your GitHub repo containing your modified version of the boilerplate files.
2. Notes:
  * A link to the GitHub Pages URL for your repo.
  * Your confidence level for this assignment from 0 to 5. (0 is no confidence, 5 is master)
  * Did you complete at least "Explorer Mode"?
  * If no, briefly explain why not.
  * If yes, how far past Explorer did you get?  

## Explorer Mode

### Quest 1!

1. Create a new project via Source Tree called `20-marvel-api`. If you don't remember how, [watch this video](https://www.youtube.com/watch?v=Mp3LYUVKoKU).

2. In your `20-marvel-api` directory run `startfrom tiy-lr-fee/assignments 20-marvel-api` to download the boilerplate.

3. Sign up for a developer account for the [Marvel API](https://developer.marvel.com). Make sure you add `localhost` to Authorized Referrers. This is on the page that lists your public and private keys.

4. Create a class called `Character` that takes a single parameter called `name`. Add a function called `getData` that should call the following API to get information about this character: `http://gateway.marvel.com:80/v1/public/characters?name=<name here>&apikey=<your key here>`

5. Get the properties `id`, `description` and `image` from the API call and save them in your `Character` class. You'll have to assemble `image` from the `thumbnail` parameters in the API call.

6. In `app.js`, setup your routes so that you have a route for `/` and a route for `/characters/:name`. Both should call a function called `character`. The function should create a `new Character` and pass in the name parameter. If there is no name parameter, it should default to Captain America.

7. Add a function called `render` to your `Character` class that takes the information you've found and re-creates everything on this page but the Events section:

  ![](https://raw.githubusercontent.com/TIY-LR-FEE/assignments/master/20-marvel-api/character.png)

  > You should now be able to go to `/` and `/characters/<name here>` and see information and a picture for any Marvel character

8. Add a function called `renderEvents` to your `Character` class. It should call the following API to get information about events the character has participated in: `http://gateway.marvel.com/v1/public/characters/<character id here>/events?apikey=<your api key here>`. You'll need to call this function _inside_ of your `getData` function after you've saved its information.

9. Take the information from that call to recreate the Events section of the mockup. You need to get the image and title from the API.

10. Style the page to look as close to the mockup as possible.


### Quest 2!

1. Create another class called `Event` that takes a single parameter `id`. It should have a function `getData` that calls the following URL: `http://gateway.marvel.com:80/v1/public/events/<event id here>?apikey=<api key here>`

2. Get `title`, `description`, `image` and `characters` from that API call. You'll need to assemble `image` like you did in Quest 1. `characters` is an array inside the API response.

3. Add another route for `/events/:id` that calls a function called `event`. It should create a `new Event` and pass in the id param.

4. Modify your `Character` class so that `renderEvents` makes both the image and title a link to `/events/<event id here>`

5. Add a `render` method to your `Event` class that recreates the following:

  ![](https://raw.githubusercontent.com/TIY-LR-FEE/assignments/master/20-marvel-api/event.png)

6. Make your list of character names link back to `/characters/<character name here>`. You should now be able to view a character, click on an event to view the event, then click on another character's name to view that character.

## Adventurer Mode

There aren't any character pictures on the Events page! Use the Marvel API to call out and get images for this page. Don't bother trying to get characters from an event in one go, the call is busted in their API. Don't worry about efficiency, just get the images.

## Epic Mode

Instead of making `/` default to Captain America, make a landing page. It should have a search box where the user can input the name of the character they want to find, as well as listing images and names for a few characters they can start with.
