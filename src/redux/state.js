let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'What\'s up', likesCount: 26}
            ],
            defaultText: 'Eminem',
            defaultMessage: 'Slim Shady'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'What\'s up'},
                {id: 3, message: 'I\'m good'},
                {id: 4, message: 'I\'m good'}
            ]
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('Beka');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'Add-Post') {
            let newPost = {
                id: 8,
                message: this._state.profilePage.defaultText,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.defaultText = '';
            this._callSubscriber(this._state);
        }

        else if (action.type === 'Update-Post-Message') {
            this._state.profilePage.defaultText = action.newText;
            this._callSubscriber(this._state);
        }

        else if (action.type === 'Add-Message') {
            let newMessage = {
                id: 8,
                message: this._state.profilePage.defaultMessage
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._callSubscriber(this._state);
        }
    }

}
export default store;