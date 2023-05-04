import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const jwt = request.cookies.get("tookenLogin");
  if (!jwt) return NextResponse.redirect(new URL("/login", request.url));

  try {
    const payload = await jwtVerify(
      jwt.value,
      new TextEncoder().encode("secret")
    );
    if (payload.payload.id_rool !== 1) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/dashboard/",
    "/users/",
    "/customers/",
    "/products/",
    "/ventas/",
    "/api/auth/clients/show/",
    "/api/auth/clients/showCustomers/",
    "/api/auth/clients/delete/:id/",
    "/api/auth/compra/delete/:id/",
    "/api/auth/compra/update/:id/",
    "/api/auth/products/upload/",
    "/api/auth/users/registerUser/",
  ],
};
