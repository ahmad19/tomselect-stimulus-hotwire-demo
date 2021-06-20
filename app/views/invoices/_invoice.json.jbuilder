json.extract! invoice, :id, :customer_id, :due_date, :created_at, :updated_at
json.url invoice_url(invoice, format: :json)
