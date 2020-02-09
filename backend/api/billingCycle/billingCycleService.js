const BillingCycle = require('./billingCycle')

// Mágica do node-restful
BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})

BillingCycle.route('count', (req,res, next) => {
  BillingCycle.countDocuments((error, value) => {
    if(error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json({value})
    }
  })
})

module.exports =BillingCycle