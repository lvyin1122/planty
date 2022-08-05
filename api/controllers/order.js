import Order from "../models/Order";

export const createOrder = async (req, res, next) => {
    try {
        const order = new Order({
            ...req.body,
        });
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (err) {
        next(err);
    }
}

export const updateOrder = async (req, res, next) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json(order);
    } catch (err) {
        next(err);
    }
}

export const deleteOrder = async (req, res, next) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        res.status(200).json(order);
    } catch (err) {
        next(err);
    }
}

export const getOrder = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id);
        res.status(200).json(order);
    } catch (err) {
        next(err);
    }
}

export const getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (err) {
        next(err)
    }
}

export const getUserOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({ userId: req.params.id });
        res.status(200).json(orders);
    } catch (err) {
        next(err);
    }
}

export const getMonthlyIncome = async (req, res, next) => {
    const productId = req.query.pid;
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(date.setMonth(date.getMonth() - 2));
try {
    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
          ...(productId && {
            products: { $elemMatch: { productId } },
          }),
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    next(err);
  }
}