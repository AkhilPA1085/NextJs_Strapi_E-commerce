// get all services
export async function getServices() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/services?populate=*`,
    {
      method: "GET",
      headers: {
        Authorization: "bearer " + process.env.NEXT_PUBLIC_API_KEY,
      },
      cache: "no-store",
    }
  );
  const post = await res?.json();
  const data = await post?.data;
  return data;
}

// get single service
export async function getService(serviceId) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/services/${serviceId}?populate=*`,
    {
      method: "GET",
      headers: {
        Authorization: "bearer " + process.env.NEXT_PUBLIC_API_KEY,
      },
      cache: "no-store",
    }
  );
  const post = await res?.json();
  const data = await post?.data;
  return data;
}

// get all products
export async function getProducts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?populate=*`,
    {
      method: "GET",
      headers: {
        Authorization: "bearer " + process.env.NEXT_PUBLIC_API_KEY,
      },
      cache: "no-store",
    }
  );
  const post = await res?.json();
  const data = await post?.data;
  return data;
}

// get single product
export async function getProduct(productId) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}?populate=*`,
    {
      method: "GET",
      headers: {
        Authorization: "bearer " + process.env.NEXT_PUBLIC_API_KEY,
      },
      cache: "no-store",
    }
  );
  const post = await res?.json();
  const data = await post;
  return data;
}

// make payment urls
export async function makePaymentRequest(payload){
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
    method: "POST",
    headers: {
      Authorization: "bearer " + process.env.NEXT_PUBLIC_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  });
  const data = res.json();
  return data;
};
