import '../scss/index.scss'
import Modal from './libs/modal'

if (module.hot) {
	module.hot.accept()
}

const modal = new Modal({
	modalName: '[data-modal-name="First"]',
	width: '400px',
	isClose: () => {
        console.log('It was closed');
	},
	isOpen: () => {
		console.log('It was opened');
	},
})
