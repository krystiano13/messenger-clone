export type FriendMessage = {
    friend_name: string;
    message: string;
    time: string;
}

export type FriendWithMessage = {
    friend: FriendMessage,
    last_message: string
}