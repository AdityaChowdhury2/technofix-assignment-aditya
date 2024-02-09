import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
	return (
		<div className="p-2 w-full ">
			<div className="h-full flex items-center border-[var(--secondary-color)] border p-4 rounded-lg">
				<img
					alt="team"
					className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
					src={user?.image}
				/>
				<div className="flex-grow text-[var(--secondary-color)]">
					<h2 className="title-font font-medium ">
						<Link to={`/users/${user?.id}`}>
							{user.firstName + ' ' + user.lastName}
						</Link>
					</h2>
					<p className="text-gray-500 text-sm mb-2">{user.email}</p>
					<p className="text-xs">Phone: {user.phone}</p>
					<p className="text-xs">
						Address:{' '}
						{user.address?.address +
							', ' +
							user.address?.city +
							', ' +
							user.address?.state}
					</p>
					<p className="text-xs">Company: {user?.company?.name}</p>
				</div>
			</div>
		</div>
	);
};

export default UserCard;

UserCard.propTypes = {
	user: PropTypes.object,
};
