// Mock asynchronous service functions for this callback-flow example.
function complete(callback, result) {
    setTimeout(function () {
        callback(null, result);
    }, 10);
}

function loginUser(email, password, callback) {
    complete(callback, { id: 1, email: email });
}

function getUserProfile(userId, callback) {
    complete(callback, { userId: userId, name: "Pramod" });
}

function getUserOrders(userId, callback) {
    complete(callback, [{ id: 101, userId: userId }]);
}

function getOrderDetails(orderId, callback) {
    complete(callback, {
        id: orderId,
        paymentId: 201,
        shippingId: 301,
        productId: 401
    });
}

function getPaymentDetails(paymentId, callback) {
    complete(callback, { id: paymentId, status: "paid" });
}

function getShippingDetails(shippingId, callback) {
    complete(callback, { id: shippingId, status: "shipped" });
}

function getProductDetails(productId, callback) {
    complete(callback, { id: productId, name: "Laptop" });
}

function sendConfirmationEmail(email, order, payment, shipping, product, callback) {
    complete(callback, "Confirmation email sent to " + email);
}

function updateNotificationStatus(userId, callback) {
    complete(callback, { userId: userId, updated: true });
}

function generateReport(user, profile, order, payment, shipping, product, callback) {
    complete(callback, {
        user: user.email,
        profile: profile.name,
        orderId: order.id,
        paymentStatus: payment.status,
        shippingStatus: shipping.status,
        product: product.name
    });
}

loginUser("pramod@example.com", "password123", function (loginError, user) {

    if (loginError) {
        console.log("Login failed:", loginError);
        return;
    }

    console.log("User logged in:", user.id);

    getUserProfile(user.id, function (profileError, profile) {

        if (profileError) {
            console.log("Failed to get profile:", profileError);
            return;
        }

        console.log("Profile received");

        getUserOrders(user.id, function (ordersError, orders) {

            if (ordersError) {
                console.log("Failed to get orders:", ordersError);
                return;
            }

            console.log("Orders received");

            getOrderDetails(orders[0].id, function (orderError, order) {

                if (orderError) {
                    console.log("Failed to get order:", orderError);
                    return;
                }

                console.log("Order details received");

                getPaymentDetails(order.paymentId, function (paymentError, payment) {

                    if (paymentError) {
                        console.log("Failed to get payment:", paymentError);
                        return;
                    }

                    console.log("Payment details received");

                    getShippingDetails(order.shippingId, function (shippingError, shipping) {

                        if (shippingError) {
                            console.log("Failed to get shipping:", shippingError);
                            return;
                        }

                        console.log("Shipping details received");

                        getProductDetails(order.productId, function (productError, product) {

                            if (productError) {
                                console.log("Failed to get product:", productError);
                                return;
                            }

                            console.log("Product details received");

                            sendConfirmationEmail(
                                user.email,
                                order,
                                payment,
                                shipping,
                                product,
                                function (emailError, emailResult) {

                                    if (emailError) {
                                        console.log(
                                            "Failed to send email:",
                                            emailError
                                        );
                                        return;
                                    }

                                    console.log("Confirmation email sent");

                                    updateNotificationStatus(
                                        user.id,
                                        function (notificationError, result) {

                                            if (notificationError) {
                                                console.log(
                                                    "Failed to update notification:",
                                                    notificationError
                                                );
                                                return;
                                            }

                                            console.log(
                                                "Notification status updated"
                                            );

                                            generateReport(
                                                user,
                                                profile,
                                                order,
                                                payment,
                                                shipping,
                                                product,
                                                function (reportError, report) {

                                                    if (reportError) {
                                                        console.log(
                                                            "Failed to generate report:",
                                                            reportError
                                                        );
                                                        return;
                                                    }

                                                    console.log(
                                                        "Everything completed!"
                                                    );

                                                    console.log(report);
                                                }
                                            );
                                        }
                                    );
                                }
                            );
                        });
                    });
                });
            });
        });
    });
});

/* o/p:
User logged in: 1
Profile received
Orders received
Order details received
Payment details received
Shipping details received
Product details received
Confirmation email sent
Notification status updated
Everything completed!
{
  user: 'pramod@example.com',
  profile: 'Pramod',
  orderId: 101,
  paymentStatus: 'paid',
  shippingStatus: 'shipped',
  product: 'Laptop'
} */