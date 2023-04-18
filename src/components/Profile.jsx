export const Profile = ({ items }) => {
  return (
    <div class="profile">
      <div class="description">
        <img src={items.avatar} alt="User avatar" class="avatar" />
        <p class="name">{items.username}</p>
        <p class="tag">{items.tag}</p>
        <p class="location">{items.location}</p>
      </div>
      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{items.stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{items.stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{items.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
