import "./TopCategories.css";
const urls = [
    {
        id: 1,
        url: "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png",
        type: "Furniture"
    },
    {
        id: 2,
        url: "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e52d6553668075697e_hand%20bag-min.png",
        type: "Hand Bag"
    },
    {
        id: 3,
        url: "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc22b7ea53520_books-min.png",
        type: "Books"
    },
    {
        id: 4,
        url: "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e754ac2e32897cb53b_tech-min.png",
        type: "Tech"
    },
    {
        id: 5,
        url: "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64b769118272f244f_sneakers-min.png",
        type: "Sneakers"
    },
    {
        id: 6,
        url: "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e71eb4ad6d07e7568f_travel-min.png",
        type: "Travel"
    }
]

const TopCategories = () => {
    return <div className="top-categories">
        <h2>Shop Our Top Categories</h2>
        <div className="photos">
            {urls.map((pic) => (
                <div key={pic.id}>
                    <img src={pic.url} alt="" ></img>
                    <p>{pic.type}</p>
                </div>
            ))}
        </div>
    </div>

}

export default TopCategories;