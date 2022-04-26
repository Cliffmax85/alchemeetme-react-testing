import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from './Home';

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', () => {
  render(
    <MemoryRouter>
      <Home user={user} />
    </MemoryRouter>
  );

  // NAME
  screen.getByText(/vonta/i);
  // Motto
  screen.getByText(/res non verba/i);
  // Interests
  screen.getByText(/interests/i);
  // Avatar
  screen.getByAltText(/avatar/i);
  // Header
  screen.getByAltText(/header/i);
  // List of interests
  const likesArr = [];
  const likes = screen.getAllByRole('listitem');
  likes.map(like => {
    return likesArr.push(like.textContent)
  });
  console.log('\\/likes///', likesArr);

  expect(likesArr).toEqual([
    // Is there a way to get this ▼ to work?
    // /react/i,
    // /anime/i,
    // /traveling/i,
    // /living/i,
    // /tower defense games/i,
    // /card games/i
    "React",
    "Anime",
    "Traveling",
    "Living",
    "Tower Defense Games",
    "Card Games",
  ]);



  screen.debug();
})
