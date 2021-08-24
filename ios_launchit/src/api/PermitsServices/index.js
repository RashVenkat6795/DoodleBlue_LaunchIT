import request from '../core';
import {EndPoint} from '../endPoint'

export function getDashboard(lid,transactionId,peopleRSN){
    let data = [
        {
            "fieldName": "argPeopleRSN",
            "fieldValue": peopleRSN
        }
    ]
    return request({
        url: EndPoint.GetDashboard+'?lid='+lid+'&transactionCode='+transactionId,
        method: 'POST',
        data
    });
}

export function getMyPermits(lid,peopelRSN) {
    return request({
        url: EndPoint.GetMyPermits+'?lid='+lid+'&peopleRSN='+peopelRSN,
        method: 'GET',
    });
};

export function getPermitSummary(lid,folderRSN) {
    return request({
        url: EndPoint.GetPermitSummary+'?folderRSN='+folderRSN+'&lid='+lid,
        method: 'GET',
    });
};

export function getProperty(lid,propertyRSN) {
    return request({
        url: EndPoint.GetProperty+'?lid='+lid+"&propertyRSN="+propertyRSN,
        method: 'GET',
    });
};

export function getApplicationDetails(lid, folderRSN) {
    return request({
        url: EndPoint.GetApplicationDetails+'?lid='+lid+"&folderRSN="+folderRSN,
        method: 'GET',
    });
}

export function getFolderPeople(lid, folderRSN) {
    return request({
        url: EndPoint.GetFolderPeople+'?lid='+lid+"&folderRSN="+folderRSN,
        method: 'GET',
    });
};

export function getFolderFee(lid,argFolderRSN) {
    return request({
        url: EndPoint.GetFolderFee+'?lid='+lid+'&argFolderRSN='+argFolderRSN,
        method: 'GET'
    })
}

export function getFolderByRSN(lid, folderRSN) {
    return request({
        url: EndPoint.GetFolderByRSN+'?lid='+lid+'&folderRSN='+folderRSN,
        method: 'GET'
    })
}

export function getWorkflow(lid, folderRSN) {
    return request({
        url: EndPoint.GetWorkflow+'?lid='+lid+'&folderRSN='+folderRSN,
        method: 'GET'
    })
}

export function getAttachmentList(lid, folderRSN) {
    return request({
        url: EndPoint.GetAttachmentList+'?lid='+lid+'&folderRSN='+folderRSN,
        method: 'GET'
    })
}

export function uploadFile(lid, folderRSN, file) {
    let formData = new FormData()
    formData.append("file",file)
    return request({
        url: EndPoint.UploadFile+'?lid='+lid+'&folderRSN='+folderRSN,
        method: 'POST',
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

export function addFolderAttachment(lid, folderRSN, filename, extension, description, detail){
    return request({
        url: EndPoint.AddFolderAttachment+'?lid='+lid+'&folderRSN='+folderRSN+'&fileName='+filename+'.'+extension,
        method: 'POST',
        data :{
            "attachmentCode":"1020",
            "attachmentDesc": description, //"Address Change",
            "attachmentFileSuffix": extension,
            "attachmentFileAlias": filename,
            "attachmentDetail": detail //"12 ATTACHMENT"
        }
    })
}