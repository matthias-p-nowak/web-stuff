test:

vapid:
    openssl ecparam -name prime256v1 -genkey -noout -out vapid.private.key
    openssl ec -in vapid.private.key -pubout -out vapid.public.key