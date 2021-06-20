# frozen_string_literal: true

class CustomersController < ApplicationController
  def create
    @customer = Customer.new(customer_params)
    respond_to do |format|
      if @customer.valid?
        @customer.save
        format.turbo_stream
      else
        format.turbo_stream
      end
    end
  end

  private

  def customer_params
    params.require(:customer).permit(:name, :email)
  end
end
