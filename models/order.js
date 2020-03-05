let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let order = Schema({
products: [{type: Schema.Types.ObjectId, ref: 'orderedProducts'}],
carrier:{type: String},
country:{type: String},
countryTax:{type: Number},
couponDisc:{type: Number},
isCoupon:{type: Boolean},
couponId: {type: String},
fees:{type: Object},
grandTotal:{type: Number},
label:{type: String},
orderStatus:{type: String},
paymentMethod: {type: String},
paymentStatus:{type: String},
originalRate:{type: Number},
rateId:{type: String},
shipmentId:{type:String},
shippingCharge:{ type: Number},
shippingMethod:{type: String},
status:{type: String},
taxAmount:{type: Number},
totalVolume:{type: Number},
totalWeight:{type: Number},
totalHeight:{type: Number},
totalLength:{type: Number},
totalWidth:{type: Number},
trackerId:{type: String},
trackingCode:{type: String},
transactionId: {type: String},
userDetails:{type: Object},
userId:{type: Schema.Types.ObjectId, ref:"User2"},
userMetaId:{type: Schema.ObjectId, ref:"UserMeta2"},
wholeSubtotal:{type: Number},
isGuest: Boolean,
wasReferred:{type: Boolean, default:false},
rate:{type: Number},
createdOn:{type: Date, default: Date.now},
isDeleted:{type: Boolean, default:false},
referral:{type: Schema.Types.ObjectId, ref:"Referralvisits"},
refPercentage:{type:Number}
});

let Order = (module.exports = mongoose.model('Order', order))