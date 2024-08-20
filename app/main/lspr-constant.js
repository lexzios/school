'use strict';

var lsprNav = {
	auth: {
		path: '/',
	},
	dashboard: {
		path: '/dashboard',
		settings: {
			path: '/settings'
		},
		settingsJobPosition: {
			path: '/settings/job-position'
		}
	},
	recruitment: {
		path: '/recruitment',
		requisition: {
			path: '/recruitment/requisition',
			_action: {
				create: '/recruitment/requisition/create',
				detail: '/recruitment/requisition/:requisitionid',
			}
		},
		interview: {
			path: '/recruitment/interview',
			schedule: {
				path: '/recruitment/interview/schedule',
				_action: {
					create: '/recruitment/interview/schedule/create/:date',
					edit: '/recruitment/interview/schedule/edit/:interviewid',
					search: '/recruitment/interview/schedule/search/:date',
				}
			},
			result: {
				path: '/recruitment/interview/result',
				_action: {
					create: '/recruitment/interview/result/create'
				},
				user: {
					_action: {
						detail: '/recruitment/interview/result/user/:result',
					}
				},
				humanResource: {
					_action: {
						detail: '/recruitment/interview/result/human-resource/:result',
					}
				}
			}
		},
		applicant: {
			path: '/recruitment/applicant',
			_action: {
				create: '/recruitment/applicant/create',
				detail: '/recruitment/applicant/:applicantid',
			},
			interview: {
				path: '/recruitment/applicant/:applicantid/interview',
			},
			entrance: {
				path: '/recruitment/applicant/:applicantId/entrance-checklist'
			}
		},
		settings: {
			path: '/recruitment/settings'
		}
	},
	employee: {
		path: '/employee',
		_action: {
			list: '/employee/list',
		},
		profile: {
			path: '/employee/p/:employeeid/',
		},
		attendance: {
			path: '/employee/:employeeId/attendance'
		},
		training: {
			path: '/employee/:employeeId/training'
		},
		loan: {
			path: '/employee/:employeeId/loan'
		},
		medical: {
			path: '/employee/:employeeId/medical'
		},
		allowance: {
			path: '/employee/:employeeId/allowance',
			_action: {
				list: '/employee/allowance'
			},
			education: {
				_action: {
					create: '/employee/:employeeId/allowance/education/request',
					detail: '/employee/:employeeId/allowance/education/:allowanceId',
				}
			},
			facilities: {
				_action: {
					create: '/employee/:employeeId/allowance/facilities/request',
					detail: '/employee/:employeeId/allowance/facilities/:allowanceId',
				}
			}
		},
		notice: {
			path: '/employee/:employeeId/notice',
			_action: {
				create: '/employee/:employeeId/notice/create',
				detail: '/employee/:employeeId/notice/:noticeId'
			}
		},
		noticeLetter: {
			path: '/employee/notice-letter/',
			_action: {
				create: '/employee/notice-letter/create',
				detail: '/employee/notice-letter/:noticeId'
			}
		},
		changeStatus: {
			path: '/employee/:employeeId/change-status',
			_action: {
				edit: '/employee/:employeeId/change-status/:changeId'
			}
		},
		exit: {
			path: '/employee/exit',
			_action: {
				create: '/employee/exit/create',
				edit: '/employee/exit/edit/:exitId',
				detail: '/employee/exit/:exitId',
			},
			interview: {
				_action: {
					create: '/employee/exit/interview/create',
					edit: '/employee/exit/interview/edit/:exitInterviewId',
					detail: '/employee/exit/interview/:exitInterviewId'
				}
			},
			checklist: {
				path: '/employee/:employeeId/exit/checklist'
			}
		},
		settings: {
			path: '/employee/settings'
		},
		resignedEmployee: {
			path: '/employee/resigned-employee/list'
		}
	},
	attendance: {
		path: '/attendance',
		_action: {
			checkIn: '/attendance/check-in',
			checkOut: '/attendance/check-out',
			edit: '/attendance/edit/:date',
			detail: '/attendance/:date'
		},
		time: {
			path: '/attendance/time',
		},
		leave: {
			path: '/attendance/leave',
			_action: {
				create: '/attendance/leave/request',
				edit: '/attendance/leave/edit/:date',
				detail: '/attendance/leave/:date'
			},
		},
		permission: {
			path: '/attendance/permission',
			_action: {
				create: '/attendance/permission/request',
				detail: '/attendance/permission/:date'
			}
		},
		settings: {
			path: '/attendance/settings'
		},
		workLeavePermission: {
			path: '/attendance/work-leave-permission',
			_action: {
				create: '/attendance/work-leave-permission/request',
				detail: '/attendance/work-leave-permission/:date'
			}
		},
		leaveWithoutPay: {
			path: '/attendance/leave-without-pay',
			_action: {
				create: '/attendance/leave-without-pay/request',
				detail: '/attendance/leave-without-pay/:date'
			}
		}
	},
	training: {
		path: '/training',
		requisition: {
			path:'/training/requisition',
			_action: {
				create: '/training/create-requisition',
				edit: '/training/requisition/:requisitionId'
			}
		},
		internal: {
			path: '/training/internal/',
			_action: {
				create: '/training/internal/create',
				detail: '/training/internal/:trainingId'
			},
			participant: {
				path: '/training/internal/:trainingId/participant',
				attendance: {
					path: '/training/internal/:trainingId/participant/:employeeId/attendance'
				}
			},
			evaluation: {
				path: '/training/internal/:trainingId/evaluation',
				_action: {
					create: '/training/internal/:trainingId/evaluation/create',
					detail: '/training/internal/:trainingId/evaluation/:employeeId'
				}
			},
			feedback: {
				path: '/training/internal/:trainingId/feedback',
				_action: {
					create: '/training/internal/:trainingId/feedback/create',
					detail: '/training/internal/:trainingId/feedback/:employeeId'
				}
			},
			attendance: {
				path: '/training/internal/:trainingId/attendance'
			}
		},
		external: {
			path: '/training/external/',
			_action: {
				create: '/training/external/create',
				detail: '/training/external/:trainingId'
			},
			participant: {
				path: '/training/external/:trainingId/participant',
				attendance: {
					path: '/training/external/:trainingId/participant/:employeeId/attendance'
				}
			},
			feedback: {
				path: '/training/external/:trainingId/feedback',
				_action: {
					create: '/training/external/:trainingId/feedback/create',
					detail: '/training/external/:trainingId/feedback/:employeeId'
				}
			}
		},
		schedule: {
			path: '/training/schedule/path/:year',
			_action: {
				create: '/training/schedule/create'
			}
		},
		scholarship:{
			path: '/training/scholarship',
			_action: {
				create: '/training/scholarship/create',
				edit: '/training/scholarship/:scholarshipId',
                paymentDetail: '/training/scholarship/:scholarshipId/payment-detail'
			}
		},
		businessTrip:{
			path: '/training/business-trip',
			_action: {
				create: '/training/business-trip/create',
				detail: '/training/business-trip/:businessTripId'
			}
		},
		settings: {
			path: '/training/settings'
		}
	},
	performanceAppraisal: {
		path: '/performance-appraisal',
		settings: {
			path: '/performance-appraisal/settings'
		},
		managerialAppraisal: {
			_action: {
				create: '/performance-appraisal/managerial/create'
			}
		},
		employeeAppraisal: {
			_action: {
				create: '/performance-appraisal/employee/create'
			}
		}
	},
	talentManagement: {
		path: '/talent-management',
		settings: {
			path: '/talent-management/settings'
		}
	},
	grievanceAndIdeaHandling: {
		path: '/grieavance-and-idea-handling',
		_action: {
			create: '/grievance-and-idea-handling/create',
			detail: '/grievance-and-idea-handling/:submissionId/edit',
			list: '/grievance-and-idea-handling/list'
		},
		settings: {
			path: '/grievance-and-idea-handling/settings'
		}
	},
	medical: {
		path: '/medical-reimbursement',
		_action: {
			create: "/medical-reimbursement/create",
			detail: "/medical-reimbursement/:reimbursementId/edit",
			list: "/medical-reimbursement/list"
		},
		settings: {
			path: '/medical-reimbursement/settings/',
			groups: {
				path: '/medical-reimbursement/settings/groups'
			},
			rules: {
				path: '/medical-reimbursement/settings/rules',
				_action: {
					detail: '/medical-reimbursement/settings/rules/:rulesId'
				}
			}
		}
	},
	loan: {
		path: '/loan',
		_action: {
			create: '/loan/request',
			detail: '/loan/:loanId/edit',
			list: '/loan/list',
            paymentDetail: '/loan/:loanId/payment-detail'
		},
		settings: {
			path: '/loan/settings'
		}
	},
	payroll: {
		path: '/payroll',
		_action: {
			list: '/payroll/list',
			create: '/payroll/create',
			detail: '/payroll/:payrollId/edit'
		},
		settings: {
			path: '/payroll/settings',
			allowanceClassification: {
				path: '/payroll/allowance-classification'
			}
		},
	}
};

/**
 * @ngdoc constant
 * @name lspr.constant:lspr
 * @description
 * # constant for storing
 * routes component controller
 */
 var lsprAPI = {
 	config: {
 		prefix: 'api',
 		apiVersion: 'v1',
 		isSecure: false,
 		domain: 'localhost:5050',
 	},
 	route: {
 		auth: {
 			login: '/auth/login',
 			logout: '/auth/logout'
 		},
 		company: {
 			department: '/company/settings/department',
 			location: '/company/settings/location',
 			classification: '/company/settings/classification',
 			level: '/company/settings/level'
 		}
 	},
 };

/**
 * @ngdoc constant
 * @name lspr.constant:lspr
 * @description
 * # constant for storing
 * routes component controller
 */
 lspr.constant('lsprAPI', lsprAPI);

 lspr.constant('lsprNav', lsprNav);
