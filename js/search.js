const searchClient = algoliasearch("Application ID", "Search-Only API Key");

const search = instantsearch({
	indexName: "posts",
	searchClient
});

search.addWidgets([
	instantsearch.widgets.searchBox({
		container: "#search-box",
		placeholder: "Start typing",
		autofocus: true,
		showReset: false,
		showSubmit: false,
		searchAsYouType: true,
		showLoadingIndicator: true,
		magnifier: true,
		cssClasses: {
			root: "search-margin-top",
			input: "search-input"
		}
	}),
	instantsearch.widgets.poweredBy({
		container: "#powered-by",
		cssClasses: {
			root: "powered-by"
		}
	}),
	instantsearch.widgets.hits({
		container: "#hits",
		cssClasses: {
			list: "search-results-list",
			emptyRoot: "empty-search-results"
		},
		templates: {
			item: `
                         <div class="post-item">
                             <h2 class="post-title">
                                {{ title }}
                             </h2>
                             <a href="{{ uri }}" class="post-link">Read</a>
                         </div>

                     `,
			empty: `
                         <p>No results for <q>{{ query }}</q></p>
            `
		}
	})
]);

search.start();
