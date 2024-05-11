import { Link } from "react-router-dom";

function ProductsList({ data }) {
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb:grid-cols-2 maw-w-5xl mx-auto px-8">
      {data &&
        data.products.map((Osh) => {
          return (
            <li className="card  bg-base-100 shadow-xl " key={Osh.id}>
              {
                <>
                  <figure>
                    <img
                      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fexpress24.uz%2Fstore%2F3238%3FproductId%3D90089&psig=AOvVaw1RezUau6JTdJ6zpFNcpmZa&ust=1715487395109000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKiW1tfehIYDFQAAAAAdAAAAABAE"
                      alt="Shoes"
                      className=" w-full h-52 object-cover"
                    />
                  </figure>
                  <div className="card-body ">
                    <h2 className="card-title">Osh</h2>
                    <p className=" line-clamp-3">1-kg</p>
                    <ul className=" ">
                      
                      <li className=" p-5">
                        <b>Price:25000</b>
                      </li>
                      <li className=" p-5">
                        <b>Rating:</b>
                        {Osh.rating}
                      </li>
                    </ul>
                    <div className="flex items-center">
                      <p className="  p-5">
                        <b>Sale</b>:
                      </p>
                      <Link
                        to={`/product/${Osh.id}`}
                        className="btn btn-primary mt-5"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </>
              }
            </li>
          );
        })}
    </ul>
  );
}

export default ProductsList;
