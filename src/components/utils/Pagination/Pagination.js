import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import "./Pagination.css";
import { useNavigate } from "react-router-dom";

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
	return (
		<>
			{currentItems &&
				currentItems.map((item) => (
					<div>
						<h3>Item #{item}</h3>
					</div>
				))}
		</>
	);
}

function Pagination({ pagination }) {
	const navigate = useNavigate();

	const { itemsPerPage, totalPage: pageCount } = pagination;
	// We start with an empty list of items.
	// const [currentItems, setCurrentItems] = useState(null);
	// const [pageCount, setPageCount] = useState(0);
	// // Here we use item offsets; we could also use page offsets
	// // following the API or data you're working with.
	// const [itemOffset, setItemOffset] = useState(0);

	// useEffect(() => {
	// 	// Fetch items from another resources.
	// 	const endOffset = itemOffset + itemsPerPage;
	// 	console.log(`Loading items from ${itemOffset} to ${endOffset}`);
	// 	setCurrentItems(items.slice(itemOffset, endOffset));
	// 	setPageCount(Math.ceil(items.length / itemsPerPage));
	// }, [itemOffset, itemsPerPage]);

	// Invoke when user click to request another page.
	const handlePageClick = (event) => {
		const currentUrl = window.location.href;
		let locationUrl = currentUrl.slice(7);
		const indexPage = locationUrl.indexOf("page");
		if (indexPage > 0) {
			locationUrl = locationUrl.slice(0, indexPage - 1);
		}
		const urlRedirect = `//${locationUrl}?page=${event.selected + 1}`;
		const url = urlRedirect;
		navigate(url);
	};

	return (
		<>
			{/* <Items currentItems={currentItems} /> */}
			<div className="pagination">
				<ReactPaginate
					breakLabel="..."
					nextLabel="next >"
					onPageChange={handlePageClick}
					pageRangeDisplayed={1}
					pageCount={pageCount}
					previousLabel="< previous"
					renderOnZeroPageCount={null}
				/>
			</div>
		</>
	);
}

export default Pagination;
