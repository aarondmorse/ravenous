const apiKey = '9eXvde5zc9pshIMIRdZDP_Df8wQVUxBs3KiIoPqe9WxrltpCXVzYOzu8dG7eh7X1XhPxt6MiiTQ57Q9VyjXEU-1xv0zQcR4Ko0-xYeTZzakHvaywumbR1mJ1YqyKXHYx';

const Yelp = {
  search(term, location, sortBy) {
    const corsUrl = 'https://cors-anywhere.herokuapp.com/';
    const urlToFetch = `${corsUrl}https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
    return fetch(urlToFetch, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then((response) => {
      return response.json();
    }).then((jsonResponse) => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map((business) => {
          console.log(business);
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }
        })
      }
    });
  }
};

export default Yelp;
