import { useEffect, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import UserCard from '../../components/UserCard';
import AddUserForm from '../../components/AddUserForm';
import FadeLoader from 'react-spinners/FadeLoader';

const Home = () => {
	const [users, setUsers] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [sortBy, setSortBy] = useState('name');
	const [loading, setLoading] = useState(true);
	const [showUserForm, setShowUserForm] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [newUser, setNewUser] = useState({});

	const closeModal = () => {
		setShowModal(false);
	};
	const openModal = () => {
		setShowModal(true);
	};

	const hideUserForm = () => {
		setShowUserForm(false);
	};

	const sortData = data => {
		if (sortBy === 'name') {
			setUsers(data.sort((a, b) => a.firstName.localeCompare(b.firstName)));
		} else if (sortBy === 'email') {
			setUsers(data.sort((a, b) => a.email.localeCompare(b.email)));
		} else if (sortBy === 'company') {
			setUsers(
				data.sort((a, b) => a.company.name.localeCompare(b.company.name))
			);
		}
	};
	useEffect(() => {
		const fetchUsers = async () => {
			const response = await fetch('https://dummyjson.com/users');
			const data = await response.json();
			setLoading(false);
			let userData = data.users;
			if (searchText !== '') {
				userData = data.users.filter(
					user =>
						user.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
						user.lastName.toLowerCase().includes(searchText.toLowerCase())
				);
			}
			sortData(userData);
		};
		fetchUsers();
	}, [searchText, sortBy]);

	useEffect(() => {
		const handleEsc = event => {
			if (event.keyCode === 27) setShowModal(false);
		};
		if (showModal) {
			window.addEventListener('keydown', handleEsc);
			document.getElementById('my_modal_2').showModal();
		} else {
			document.getElementById('my_modal_2').close();
		}
		return () => {
			window.removeEventListener('keydown', handleEsc);
		};
	}, [showModal]);

	return (
		<div className="container my-10">
			<div className="flex justify-evenly md:flex-row flex-col gap-3 px-3">
				<input
					type="text"
					placeholder="Type here"
					value={searchText}
					className="input input-bordered w-full lg:max-w-xs"
					onChange={event => setSearchText(event.target.value)}
				/>
				<select
					className="select select-bordered w-full lg:max-w-xs"
					defaultValue={'name'}
					onChange={e => setSortBy(e.target.value)}
				>
					<option value={'name'}>Sort by Name</option>
					<option value={'email'}>Sort by Email</option>
					<option value={'company'}>Sort by Company Name</option>
				</select>
				<button
					className="btn bg-[var(--secondary-color)] text-white hover:bg-[var(--secondary-color-dark)]"
					onClick={() => setShowUserForm(!showUserForm)}
				>
					<span className="flex gap-2">
						{!showUserForm ? (
							<>
								Add User <FaPlus />
							</>
						) : (
							<>
								Hide Form <FaMinus />
							</>
						)}
					</span>
				</button>
			</div>
			{showUserForm && (
				<AddUserForm
					hideUserForm={hideUserForm}
					openModal={openModal}
					setNewUser={setNewUser}
				/>
			)}
			{users.length ? (
				<div className="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
					{users.map(user => (
						<UserCard key={user.id} user={user} />
					))}
				</div>
			) : loading ? (
				<div className="flex justify-center mt-10">
					<FadeLoader loading={loading} color={'#2e2b7e'} />
				</div>
			) : (
				<p className="text-center mt-3">No user found</p>
			)}

			<dialog id="my_modal_2" className="modal">
				<div className="modal-box">
					<form method="dialog">
						{/* if there is a button in form, it will close the modal */}
						<button
							className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
							onClick={closeModal}
						>
							✕
						</button>
					</form>
					<h3 className="font-bold text-lg text-center">New User Added</h3>
					<div className="space-y-2">
						<div className="flex justify-center mt-5">
							<img
								alt="team"
								className="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
								src={newUser?.image}
							/>
						</div>
						<p className="text-sm">FirstName: {newUser?.firstName}</p>
						<p className="text-sm">LastName: {newUser?.lastName}</p>
						<p className="text-sm">Email: {newUser?.email}</p>
						<p className="text-sm">Address: {newUser?.address}</p>
						<p className="text-sm">Company: {newUser?.companyName}</p>
					</div>
				</div>
			</dialog>
		</div>
	);
};

export default Home;
