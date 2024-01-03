import { initialRobots } from "./vendors/initalRobots.js";

const usersList = document.querySelector(".users-list");
const searchInput = document.querySelector(".header__search-box");

const removeProfiles = () => {
	const userProfiles = usersList.querySelectorAll(".user-profile");
	for (let user of userProfiles) {
		user.remove();
	}
};

const populateUser = (user) => {
	let userTemplate = document.querySelector("template ").content;

	const newUser = userTemplate.cloneNode(true);

	const userName = newUser.querySelector(".user__name");
	const userEmail = newUser.querySelector(".user__email");
	const userIcon = newUser.querySelector(".user__icon");

	userName.textContent = user["name"];
	userEmail.textContent = user["email"];
	userIcon.setAttribute("src", `${user["image"]}`);

	usersList.appendChild(newUser);
};

const populateAllUsers = (users) => users.map((user) => populateUser(user));

const changeUserListGridStyle = (filteredUsers) => {
	if (filteredUsers.length < 3) {
		usersList.style.gridTemplateColumns = `repeat(${filteredUsers.length}, 1fr)`;
	} else {
		usersList.style.gridTemplateColumns = `repeat(3, 1fr)`;
	}
};

const onChangeFilterUsers = (e) => {
	if (e.target.value == "") populateAllUsers(initialRobots);

	const filteredUsers = initialRobots.filter((user) =>
		user.name.toLowerCase().includes(e.target.value.toLowerCase())
	);

	removeProfiles();
	changeUserListGridStyle(filteredUsers);
	populateAllUsers(filteredUsers);
};

populateAllUsers(initialRobots);
searchInput.addEventListener("input", onChangeFilterUsers);
