import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';

const schema = Yup.object().shape({
	firstName: Yup.string()
		.required('First Name is required')
		.min(2, 'First Name is too short')
		.max(50, 'First Name is too long'),
	lastName: Yup.string()
		.required('Last Name is required')
		.min(2, 'Last Name is too short')
		.max(50, 'Last Name is too long'),
	email: Yup.string().email('Invalid email').required('Email is required'),
	avatarUrl: Yup.string().url('Invalid URL').required('Avatar URL is required'),
	address: Yup.string().required('Address is required'),
	companyName: Yup.string().required('Company Name is required'),
});
const AddUserForm = ({ hideUserForm, openModal, setNewUser }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = data => {
		hideUserForm();

		openModal();
		setNewUser(data);
	};

	return (
		<form className="mt-5 text-center" onSubmit={handleSubmit(onSubmit)}>
			<div>
				<h2 className="font-bold text-center text-2xl text-[var(--secondary-color)]">
					Add User Form
				</h2>
			</div>
			<div className="grid  md:grid-cols-2 gap-3 mt-5 px-2 md:px-4">
				<label className="form-control w-full col-span-2 md:col-auto">
					<div className="label">
						<span className="label-text">First name</span>
					</div>
					<input
						type="text"
						placeholder="type your first name"
						className="input input-bordered w-full"
						{...register('firstName')}
					/>
					<ErrorMessage
						errors={errors}
						name="firstName"
						render={error => (
							<p className="text-start text-xs text-red-400">{error.message}</p>
						)}
					/>
				</label>
				<label className="form-control w-full col-span-2 md:col-auto">
					<div className="label">
						<span className="label-text">Last name</span>
					</div>
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full"
						{...register('lastName')}
					/>

					<ErrorMessage
						errors={errors}
						name="lastName"
						render={error => (
							<p className="text-start text-xs text-red-400">{error.message}</p>
						)}
					/>
				</label>
				<label className="form-control w-full col-span-2 md:col-auto">
					<div className="label">
						<span className="label-text">Email</span>
					</div>
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full"
						{...register('email')}
					/>
					<ErrorMessage
						errors={errors}
						name="email"
						render={error => (
							<p className="text-start text-xs text-red-400">{error.message}</p>
						)}
					/>
				</label>
				<label className="form-control w-full col-span-2 md:col-auto">
					<div className="label">
						<span className="label-text">Avatar Url</span>
					</div>
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full"
						{...register('avatarUrl')}
					/>
					<ErrorMessage
						errors={errors}
						name="avatarUrl"
						render={error => (
							<p className="text-start text-xs text-red-400">{error.message}</p>
						)}
					/>
				</label>
				<label className="form-control w-full col-span-2">
					<div className="label">
						<span className="label-text">Address</span>
					</div>
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full"
						{...register('address')}
					/>
					<ErrorMessage
						errors={errors}
						name="address"
						render={error => (
							<p className="text-start text-xs text-red-400">{error.message}</p>
						)}
					/>
				</label>
				<label className="form-control w-full col-span-2">
					<div className="label">
						<span className="label-text">Company Name</span>
					</div>
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full"
						{...register('companyName')}
					/>
					<ErrorMessage
						errors={errors}
						name="companyName"
						render={error => (
							<p className="text-start text-xs text-red-400">{error.message}</p>
						)}
					/>
				</label>
			</div>
			<button className="btn bg-[var(--secondary-color)] mt-4 text-white hover:bg-[var(--secondary-color-dark)]">
				Add User
			</button>
		</form>
	);
};

export default AddUserForm;

AddUserForm.propTypes = {
	hideUserForm: PropTypes.func.isRequired,
	openModal: PropTypes.func.isRequired,
	setNewUser: PropTypes.func.isRequired,
};
