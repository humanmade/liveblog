import React from 'react'

export default class SelectCategory extends React.Component {

	constructor() {
		super()
		this.state = {
			categories: [],
			isLoadingCategories: false,
			hasLiveblogsCategory: null,
		}
	}

	componentWillMount() {
		this.loadCategories()
	}

	loadCategories() {
		this.setState({ isLoadingCategories: true })
		window.apiHandler.get( '/wp/v2/categories', { slug: 'liveblogs' } )
			.then( categories => {
				if ( ! categories.length ) {
					return this.setState({ hasLiveblogsCategory: false, isLoadingCategories: false })
				}

				window.apiHandler.get( '/wp/v2/categories', { parent: categories[0].id } )
					.then( categories => this.setState({ categories, isLoadingCategories:false }))
			} )
	}

	render() {

		if ( this.state.isLoadingCategories ) {
			return <p>Loading categories...</p>
		}

		if ( this.state.hasLiveblogsCategory === false ) {
			return <p>This site has no category with the slug "liveblogs", if you are the site owner, first create a category on your site called "Liveblogs".</p>
		}
		return <div>
			<h2>Select the Liveblog from the list below.</h2>
			<ul>
				{this.state.categories.map( category =>
					<li key={category.id}><a href="#" onClick={() => this.props.onSelect(category)}>{category.name}</a></li>
				)}
			</ul>
		</div>
	}
}
