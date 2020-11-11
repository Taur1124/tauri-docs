---
title: "struct.HttpRequestBuilder"
---

# Struct [tauri_api](/docs/api/rust/tauri_api/../index.html)::​[http](/docs/api/rust/tauri_api/index.html)::​[HttpRequestBuilder](/docs/api/rust/tauri_api/)

    pub struct HttpRequestBuilder {
        pub method: String,
        pub url: String,
        pub params: Option<HashMap<String, String>>,
        pub headers: Option<HashMap<String, String>>,
        pub body: Option<Value>,
        pub follow_redirects: Option<bool>,
        pub max_redirections: Option<u32>,
        pub connect_timeout: Option<u64>,
        pub read_timeout: Option<u64>,
        pub timeout: Option<u64>,
        pub allow_compression: Option<bool>,
        pub body_type: Option<BodyType>,
        pub response_type: Option<ResponseType>,
    }

The builder for HttpRequestOptions.

# [Examples](/docs/api/rust/tauri_api/about:blank#examples)

    let mut builder = HttpRequestBuilder::new("GET", "http://example.com");
    let option = builder.response_type(ResponseType::Text)
                        .follow_redirects(false)
                        .build();

    if let Ok(response) = make_request(option) {
      println!("Response: {}", response);
    } else {
      println!("Something Happened!");
    }

## Fields

`method: String`

The request method (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, CONNECT or TRACE)

`url: String`

The request URL

`params: Option<HashMap<String, String>>`

The request query params

`headers: Option<HashMap<String, String>>`

The request headers

`body: Option<Value>`

The request body

`follow_redirects: Option<bool>`

Whether to follow redirects or not

`max_redirections: Option<u32>`

Max number of redirections to follow

`connect_timeout: Option<u64>`

Connect timeout for the request

`read_timeout: Option<u64>`

Read timeout for the request

`timeout: Option<u64>`

Timeout for the whole request

`allow_compression: Option<bool>`

Whether the request will announce that it accepts compression

`body_type: Option<BodyType>`

The body type (defaults to Auto)

`response_type: Option<ResponseType>`

The response type (defaults to Json)

## Implementations

### `impl HttpRequestBuilder`

#### `pub fn new(method: impl Into<String>, url: impl Into<String>) -> Self`

Initializes a new instance of the HttpRequestBuilder.

#### `pub fn params(self, params: HashMap<String, String>) -> Self`

Sets the request params.

#### `pub fn headers(self, headers: HashMap<String, String>) -> Self`

Sets the request headers.

#### `pub fn body(self, body: Value) -> Self`

Sets the request body.

#### `pub fn follow_redirects(self, follow_redirects: bool) -> Self`

Sets whether the request should follow redirects or not.

#### `pub fn max_redirections(self, max_redirections: u32) -> Self`

Sets the maximum number of redirections.

#### `pub fn connect_timeout(self, connect_timeout: u64) -> Self`

Sets the connection timeout.

#### `pub fn read_timeout(self, read_timeout: u64) -> Self`

Sets the read timeout.

#### `pub fn timeout(self, timeout: u64) -> Self`

Sets the general request timeout.

#### `pub fn allow_compression(self, allow_compression: bool) -> Self`

Sets whether the request allows compressed responses or not.

#### `pub fn body_type(self, body_type: BodyType) -> Self`

Sets the type of the request body.

#### `pub fn response_type(self, response_type: ResponseType) -> Self`

Sets the type of the response. Interferes with the way we read the response.

#### `pub fn build(self) -> HttpRequestOptions`

Builds the HttpRequestOptions.

## Auto Trait Implementations

### `impl RefUnwindSafe for HttpRequestBuilder`

### `impl Send for HttpRequestBuilder`

### `impl Sync for HttpRequestBuilder`

### `impl Unpin for HttpRequestBuilder`

### `impl UnwindSafe for HttpRequestBuilder`

## Blanket Implementations

### `impl<T> Any for T where T: 'static + ?Sized,`

#### `fn type_id(&self) -> TypeId`

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/nightly/core/any/trait.Any.html#tymethod.type_id)

### `impl<T> Borrow<T> for T where T: ?Sized,`

#### `fn borrow(&self) -> &T`

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html#tymethod.borrow)

### `impl<T> BorrowMut<T> for T where T: ?Sized,`

#### `fn borrow_mut(&mut self) -> &mutT`

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

### `impl<T> From<T> for T`

#### `fn from(t: T) -> T`

Performs the conversion.

### `impl<T, U> Into<U> for T where U: From<T>,`

#### `fn into(self) -> U`

Performs the conversion.

### `impl<T> Pointable for T`

#### `const ALIGN: usize`

The alignment of pointer.

#### `type Init = T`

The type for initializers.

#### `unsafe fn init(init: <T as Pointable>::Init) -> usize`

Initializes a with the given initializer. [Read more](/docs/api/rust/tauri_api/about:blank#tymethod.init)

#### `unsafe fn deref<'a>(ptr: usize) -> &'aT`

Dereferences the given pointer. [Read more](/docs/api/rust/tauri_api/about:blank#tymethod.deref)

#### `unsafe fn deref_mut<'a>(ptr: usize) -> &'a mutT`

Mutably dereferences the given pointer. [Read more](/docs/api/rust/tauri_api/about:blank#tymethod.deref_mut)

#### `unsafe fn drop(ptr: usize)`

Drops the object pointed to by the given pointer. [Read more](/docs/api/rust/tauri_api/about:blank#tymethod.drop)

### `impl<T, U> TryFrom<U> for T where U: Into<T>,`

#### `type Error = Infallible`

The type returned in the event of a conversion error.

#### `fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>`

Performs the conversion.

### `impl<T, U> TryInto<U> for T where U: TryFrom<T>,`

#### `type Error = <U as TryFrom<T>>::Error`

The type returned in the event of a conversion error.

#### `fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>`

Performs the conversion.

### `impl<V, T> VZip<V> for T where V: MultiLane<T>,`

#### `fn vzip(self) -> V`
