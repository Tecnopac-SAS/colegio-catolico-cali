const https = require('https');
var querystring = require('querystring');


function httpRequest(options) {
  var postData = querystring.stringify({
    grant_type: "client_credentials",
    scope: "payment_mgmt/sesskey_payment"
  });
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(data);
      });
    });
    req.on('error', (err) => {
      reject(err);
    });
    req.write(postData);
    req.end();
  });
}

async function makeRequest() {
  const options = {
    hostname: 'qa.psp.ath.com.co',
    path: '/security/oauth2/oauth2-token',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization':'Basic MzFoMHJlbzJwbTBndmhndjZyOGsycnFnamg6MTc0Y2o0bmp1bjYybXIzYmMxanRmY3Vsb2RsbmFjZmdmNDBvdDVkYzZjaHVvZG9rbDRxcA=='
    },
  };
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
  const response = await httpRequest(options);
  return response;
}

function httpRequestPay(options, amount,invoiceType, portalURL, desc) {
  var postData = querystring.stringify({
    grant_type: "client_credentials",
    scope: "payment_mgmt/sesskey_payment"
  });
  const date = new Date();
  //(formato YYYYMMDDHHmmSS)
  const numberNie = Number(`${date.getFullYear()}${(date.getMonth()+1).toString().padStart(2,'0')}${date.getDate().toString().padStart(2,'0')}${date.getHours().toString().padStart(2,'0')}${date.getMinutes().toString().padStart(2,'0')}${date.getSeconds().toString().padStart(2,'0')}`);

  let data = {
      "Agreement": {
        "AgrmId": "00023291"
      },
      "SecretList": [
        {
          "SecretId": "user",
          "Secret": "usuario1"
        },
        {
          "SecretId": "password",
          "Secret": "usuario1951"
        }
      ],
      "Fee": {
        "CurAmt": {
          "Amt": amount,
          "CurCode": "COP"
        }
      },
      "TaxPmtInfo": {
        "CurAmt": {
          "Amt": "0",
          "CurCode": "COP"
        }
      },
      "InvoicePmtInfo": {
        "InvoiceInfo": {
          "InvoiceType": invoiceType,
          "InvoiceNum":  String(numberNie+Math.floor(Math.random() * 22)),
          "Desc": desc,
          "NIE": [
            String(numberNie)
          ],
          "InvoiceSender": {
            "Category": "0"
          }
        },
        "PmtStatus": {
          "PmtMethod": "2"
        }
      },
      "RefInfo": [
        {
          "RefId": "PortalURL",
          "RefType": `http://localhost:4200/${portalURL}`
        },
        {
          "RefId": "LogoURL",
          "RefType": "https://i.imgur.com/1VGC60v.jpg"
        },
        {
          "RefId": "Template",
          "RefType": "0"
        },
        {
          "RefId": "TokenizedData",
          "RefType": "0"
        }
      ],
      "TrnSrcInfo": {
        "TrnSrc": "2"
      }
   };
   data = JSON.stringify(data);


  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(data);
      });
    });
    req.on('error', (err) => {
      reject(err);
    });
    req.write(data);
    req.end();
  });
}

async function makeRequestPay(token, amount,invoiceType,portalURL, desc) {
  const options = {
    hostname: 'qa.psp.ath.com.co',
    path: '/payment/Payments_Trn/Trn',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-RqUID': '1603252357258',
      'X-Channel': '16',
      'X-CompanyId': '00089898',
      'X-GovIssueIdentType': 'GUEST',
      'X-IdentSerialNum': '0',
      'X-IPAddr':'192.168.1.15',
      'X-Sesskey': token,
      'X-Authorization': "q2sIy2aJLUo=SHg5V250RzVTZkNXMk1EeVdGVXMrbW5ITnBmak81N2ozTGhUSTU3d25EUndFNzdCK1pTLytld1NOUjNXbnNIbng3dFhTUHFnZ3hVM2dQbG9Jc1NETmM4ajJUUzRZVFVZQkE0SUpGZC9yR0UyUC9uNHlieXRaY2JNVUYxTnRqVlAxQzhCVlE9PQ=="
    },
  };
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
  const response = await httpRequestPay(options, amount,invoiceType, portalURL,desc);
  return response;
}
async function makePaymentStatus(token, pmtId) {
  const options = {
    hostname: 'qa.psp.ath.com.co',
    path: '/payment/Payments_BasicData/BasicData/'+pmtId,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-RqUID': '1603252357258',
      'X-Channel': '16',
      'X-CompanyId': '00089898',
      'X-GovIssueIdentType': 'GUEST',
      'X-IdentSerialNum': '0',
      'X-IPAddr':'192.168.1.15',
      'X-Sesskey': token,
      'X-Authorization': "q2sIy2aJLUo=SHg5V250RzVTZkNXMk1EeVdGVXMrbW5ITnBmak81N2ozTGhUSTU3d25EUndFNzdCK1pTLytld1NOUjNXbnNIbng3dFhTUHFnZ3hVM2dQbG9Jc1NETmM4ajJUUzRZVFVZQkE0SUpGZC9yR0UyUC9uNHlieXRaY2JNVUYxTnRqVlAxQzhCVlE9PQ==",
      "X-ApprovalId": pmtId
    },
  };
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
  const response = await httpRequest(options);
  return response;
}

module.exports = {
  makeRequest,
  makeRequestPay,
  makePaymentStatus
}
