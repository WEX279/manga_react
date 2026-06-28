function Loading(){
    return(
        <button class="inline-flex cursor-not-allowed items-center rounded-md bg-secondaryAlt px-4 py-2 text-sm leading-6 font-semibold text-gray-200">
				<svg class="mr-3 -ml-1 size-5 animate-spin text-white" viewBox="0 0 24 24">
					<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
					<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
				</svg>
				<p>
				Loading mangas...
				</p>
			</button>
    )
}

export{
    Loading
}