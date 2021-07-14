export const SUB_CAMPAIGN_COMMENTS_START = "SUB_CAMPAIGN_COMMENTS_START";
export const SUB_CAMPAIGN_COMMENTS_SUCCESS = "SUB_CAMPAIGN_COMMENTS_SUCCESS";
export const SUB_CAMPAIGN_COMMENTS_FAIL = "SUB_CAMPAIGN_COMMENTS_FAIL";

export const POST_SUB_CAMPAIGN_COMMENTS_START = "POST_SUB_CAMPAIGN_COMMENTS_START";
export const POST_SUB_CAMPAIGN_COMMENTS_SUCCESS = "POST_SUB_CAMPAIGN_COMMENTS_SUCCESS";
export const POST_SUB_CAMPAIGN_COMMENTS_FAIL = "POST_SUB_CAMPAIGN_COMMENTS_FAIL";
export const POST_SUB_CAMPAIGN_COMMENTS_CLEAR = "POST_SUB_CAMPAIGN_COMMENTS_CLEAR";

export const UPDATE_SUB_CAMPAIGN_COMMENTS_START = "UPDATE_SUB_CAMPAIGN_COMMENTS_START";
export const UPDATE_SUB_CAMPAIGN_COMMENTS_SUCCESS = "UPDATE_SUB_CAMPAIGN_COMMENTS_SUCCESS";
export const UPDATE_SUB_CAMPAIGN_COMMENTS_FAIL = "UPDATE_SUB_CAMPAIGN_COMMENTS_FAIL";
export const UPDATE_SUB_CAMPAIGN_COMMENTS_CLEAR = "UPDATE_SUB_CAMPAIGN_COMMENTS_CLEAR";


export const DELETE_SUB_CAMPAIGN_COMMENTS_START = "DELETE_SUB_CAMPAIGN_COMMENTS_START";
export const DELETE_SUB_CAMPAIGN_COMMENTS_SUCCESS = "DELETE_SUB_CAMPAIGN_COMMENTS_SUCCESS";
export const DELETE_SUB_CAMPAIGN_COMMENTS_FAIL = "DELETE_SUB_CAMPAIGN_COMMENTS_FAIL";
export const DELETE_SUB_CAMPAIGN_COMMENTS_CLEAR = "DELETE_SUB_CAMPAIGN_COMMENTS_CLEAR";

export const subCampaignCommentsStart = (payload) => {
	return {
		type: SUB_CAMPAIGN_COMMENTS_START,
		payload,
	};
};
export const subCampaignCommentsSuccess = (payload) => ({
	type: SUB_CAMPAIGN_COMMENTS_SUCCESS,
	payload,
});
export const subCampaignCommentsFail = (payload) => ({
	type: SUB_CAMPAIGN_COMMENTS_FAIL,
	payload,
});


export const postSubCampaignCommentsStart = (payload) => {
	return {
		type: POST_SUB_CAMPAIGN_COMMENTS_START,
		payload,
	};
};
export const postSubCampaignCommentsSuccess = (payload) => ({
	type: POST_SUB_CAMPAIGN_COMMENTS_SUCCESS,
	payload,
});

export const postSubCampaignCommentsFail = (payload) => ({
	type: POST_SUB_CAMPAIGN_COMMENTS_FAIL,
	payload,
});


export const postSubCampaignCommentsClear = (payload) => ({
	type: POST_SUB_CAMPAIGN_COMMENTS_CLEAR,
	payload,
});


export const updateSubCampaignCommentsStart = (payload) => {
	return {
		type: UPDATE_SUB_CAMPAIGN_COMMENTS_START,
		payload,
	};
};
export const updateSubCampaignCommentsSuccess = (payload) => ({
	type: UPDATE_SUB_CAMPAIGN_COMMENTS_SUCCESS,
	payload,
});

export const updateSubCampaignCommentsFail = (payload) => ({
	type: UPDATE_SUB_CAMPAIGN_COMMENTS_FAIL,
	payload,
});


export const updateSubCampaignCommentsClear = (payload) => ({
	type: UPDATE_SUB_CAMPAIGN_COMMENTS_CLEAR,
	payload,
});



export const deleteSubCampaignCommentsStart = (payload) => {
	return {
		type: DELETE_SUB_CAMPAIGN_COMMENTS_START,
		payload,
	};
};
export const deleteSubCampaignCommentsSuccess = (payload) => ({
	type: DELETE_SUB_CAMPAIGN_COMMENTS_SUCCESS,
	payload,
});

export const deleteSubCampaignCommentsFail = (payload) => ({
	type: DELETE_SUB_CAMPAIGN_COMMENTS_FAIL,
	payload,
});


export const deleteSubCampaignCommentsClear = (payload) => ({
	type: DELETE_SUB_CAMPAIGN_COMMENTS_CLEAR,
	payload,
});
