# Tom-select with stimulus and hotwire

This rails application is a demo of how to implement tom-select with stimulus and hotwire.


# What is this?

Demo - https://tom-select-rails-demo.herokuapp.com

This is the implementation of [tom-select](https://github.com/orchidjs/tom-select) in a rails application with stimulus and hotwire. Tom-select is a fork of `selectize` which does not have jQuery dependency.

# How to see ?

This application is a simple CRUD application where user can create invoices. In the invoice form, user can select from the available customers in the dropdown or create one on the fly. So when you spin up the server,

1. Go to new invoice page - `invoices/new`
2. Click on the customer's autocomplete dropdown, type some unique name which is not already in the db and press enter
3. A modal will open where you can fill up the new customer's detail and submit it
4. If success, then modal will close and newly created customer will be selected in the dropdown.

# Implementation

## On connect

The customer dropdown has a stimulus controller connected to it. When the invoice form renders, stimulus controller will get connected and `connect()` function will get called and enables `tom-select` on that dropdown. It also mentions to open a dropdown when `create` option is selected.

## Successful customer creation

When the customer is successfully created on the modal, rails's will send the response in turbo-stream format which will be handled by `create.turbo_stream.erb`. What it does is basically finds the original dropdown in the invoice form and updates it with new dropdown which has all the latest customers such that the dropdown in the invoice form has the details of the customer selected which is being just created by user.

## On disconnect

When the new dropdown replaces the old dropdown, stimulus controller calls `disconnect` function which basically has three things

1. Hide the customer modal
2. Listen the `hidden.bs.modal` event which emits on modal hide.
3. Reset the customer form on the modal and enable the submit button - all handled by `rails/ujs`
