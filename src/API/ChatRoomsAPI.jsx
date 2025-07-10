import axiosClient from './axiosClient';

const ChatRoomsAPI = {
	getMessageByRoomId: (roomId) => {
		const url = `/chatrooms/getById?roomId=${roomId}`;
		return axiosClient.get(url);
	},

	createNewRoom: (body) => {
		const url = `/chatrooms/createNewRoom`;
		return axiosClient.post(url, body);
	},

	addMessage: (body) => {
		const url = `/chatrooms/addMessage`;
		return axiosClient.put(url, body);
	},
};

export default ChatRoomsAPI;
