const regester = ({createUsers,hash}) => {
    return async function post(httpRequest) {
          const headers = {
            "Content-Type": "application/json",
          };
          try {
            //get the httprequest body
            const { source = {}, password, ...info } = httpRequest.body;
            source.ip = httpRequest.ip;
            source.browser = httpRequest.headers["User-Agent"];
            if (httpRequest.headers["Referer"]) {
              source.referrer = httpRequest.headers["Referer"];
            }

            // Hash the password
            const hashedPassword = await hash(password, 10);
            const posted  = await createUsers({
              ...info,
              password: hashedPassword,
              source, 
            });
          
            return {
              headers: {
                "Content-Type": "application/json",
              },
              statusCode: 201,
              body: { posted  },
            };
          } catch (e) {
            // TODO: Error logging
            console.log(e);
            return {
              headers,
              statusCode: 406,
              body: {
                error: e.message,
              },
            };
          }
        };
    }
    
    module.exports = regester