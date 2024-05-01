// import mongoose, { Schema, Types } from "mongoose";

// interface IPurchaseItem {
//   _id: mongoose.Types.ObjectId;
//   quantity: number;
//   price: number;
// }

// const purchaseItemSchema = new Schema({
//   _id: mongoose.Types.ObjectId,
//   quantity: { type: Number, required: [true, '購買堂数量為必填項'] },
//   price: { type: Number, required: [true, '價格為必填項'] }
// });

// interface IOrder extends Document {
//   _id: mongoose.Types.ObjectId;
//   create_date: Date;
//   purchase_items: IPurchaseItem[];
//   purchase_way: number;
//   invoice: number;
//   invoice_way?: number;
//   invoice_code?: string;
//   natural_certificate?: string;
//   tax_id?: string;
//   company_letterhead?: string;
//   donation_unit?: number;
//   buyer_id: Types.ObjectId;
//   buyer_name: string;
//   buyer_phone: string;
//   is_oversea: boolean;
//   city_id: number;
// }

// const orderSchema = new Schema<IOrder>({
//   _id: mongoose.Types.ObjectId,
//   create_date: { type: Date, required: [true, '訂單創建日期為必填項'] },
//   purchase_items: { type: [purchaseItemSchema], required: [true, '購買項目為必填項'] },
//   purchase_way: { type: Number, required: [true, '購買方式為必填項'], enum: [1, 2] },
//   invoice: { type: Number, required: [true, '發票選項為必填項'], enum: [1, 2, 3] },
//   invoice_way: {
//       type: Number,
//       required: function() { return this.invoice === 1; }, // 只有選擇個人發票時需要填寫
//       enum: [1, 2, 3]
//   },
//   invoice_code: { type: String, required: function() { return this.invoice_way === 2; } }, // 需手機條碼時填寫
//   natural_certificate: { type: String, required: function() { return this.invoice_way === 3; } }, // 需自然人憑證時填寫
//   tax_id: { type: String, required: function() { return this.invoice === 2; } }, // 公司發票需填公司統編
//   company_letterhead: { type: String, required: function() { return this.invoice === 2; } }, // 公司發票需填公司抬頭
//   donation_unit: { type: Number, required: function() { return this.invoice === 3; } }, // 捐贈發票需指定捐贈單位
//   buyer_id: { type: mongoose.Types.ObjectId, required: [true, '買方ID為必填項'] },
//   buyer_name: { type: String, required: [true, '買方姓名為必填項'] },
//   buyer_phone: { type: String, required: [true, '買方聯絡電話為必填項'] },
//   is_oversea: { type: Boolean, required: [true, '是否為海外為必填項'] },
//   city_id: { type: Number, required: [true, '城市ID為必填項'] },
//   dist_id: { type: Number, required: [true, '區域ID為必填項'] },
//   address: { type: String, required: [true, '地址為必填項'] }
// }, {
//   timestamps: true // 自動創建 createdAt 和 updatedAt 時間戳記
// });

// const Order = mongoose.model('Order', orderSchema);