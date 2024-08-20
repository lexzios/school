'use strict';

/**
 * LSPR Training Route Configuration

 */

 lspr.training.config(['$routeProvider', function($routeProvider) {

 	$routeProvider
        .when(
            lsprNav.training.path, {
                templateUrl: 'components/04-training/training.html',
                controller: 'TrainingController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.training.requisition.path, {
                templateUrl: 'components/04-training/requisition/training-requisition.html',
                controller: 'TrainingRequisitionController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.training.requisition._action.create, {
                templateUrl: 'components/04-training/requisition/create/create-requisition.html',
                controller: 'CreateTrainingRequisitionController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.training.requisition._action.edit, {
                templateUrl: 'components/04-training/requisition/edit/edit-requisition.html',
                controller: 'EditTrainingRequisitonController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.training.internal.path, {
                templateUrl: 'components/04-training/internal/internal-training.html',
                controller: 'InternalTrainingController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.training.internal._action.create, {
                templateUrl: 'components/04-training/internal/create/create-internal-training.html',
                controller: 'CreateInternalTrainingController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.training.internal._action.detail, {
                templateUrl: 'components/04-training/internal/detail/detail-internal-training.html',
                controller: 'DetailInternalTrainingController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.training.internal.evaluation.path, {
                templateUrl: 'components/04-training/internal/evaluation/training-evaluation.html',
                controller: 'InternalTrainingEvaluationController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.training.internal.evaluation._action.create, {
                templateUrl: 'components/04-training/internal/evaluation/create/create-evaluation.html',
                controller: 'CreateInternalTrainingEvaluationController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.training.internal.evaluation._action.detail, {
                templateUrl: 'components/04-training/internal/evaluation/detail/detail-evaluation.html',
                controller: 'DetailInternalTrainingEvaluationController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.training.internal.feedback.path, {
                templateUrl: 'components/04-training/internal/feedback/training-feedback.html',
                controller: 'InternalTrainingFeedbackController',
                controllerAs: 'vm'
            }
        )
        .when(
             lsprNav.training.internal.feedback._action.create, {
                templateUrl: 'components/04-training/internal/feedback/create/create-feedback.html',
                controller: 'CreateInternalTrainingFeedbackController',
                controllerAs: 'vm'
             }
        )
        .when(
             lsprNav.training.internal.feedback._action.detail, {
                templateUrl: 'components/04-training/internal/feedback/detail/detail-feedback.html',
                controller: 'DetailInternalTrainingFeedbackController',
                controllerAs: 'vm'
             }
        )
        .when(
             lsprNav.training.internal.participant.path, {
                templateUrl: 'components/04-training/internal/participant/training-participant.html',
                controller: 'InternalTrainingParticipantController',
                controllerAs: 'vm'
             }
        )
        .when(
             lsprNav.training.internal.participant.attendance.path, {
                templateUrl: 'components/04-training/internal/participant/attendance/participant-attendance.html',
                controller: 'InternalTrainingParticipantAttendanceController',
                controllerAs: 'vm'
             }
        )
        .when(
            lsprNav.training.external.path, {
                templateUrl: 'components/04-training/external/external-training.html',
                controller: 'ExternalTrainingController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.training.external._action.create, {
                templateUrl: 'components/04-training/external/create/create-external-training.html',
                controller: 'CreateExternalTrainingController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.training.external._action.detail, {
                templateUrl: 'components/04-training/external/detail/detail-external-training.html',
                controller: 'DetailExternalTrainingController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.training.external.feedback.path, {
                templateUrl: 'components/04-training/external/feedback/training-feedback.html',
                controller: 'ExternalTrainingFeedbackController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.training.external.feedback._action.create, {
                templateUrl: 'components/04-training/external/feedback/create/create-feedback.html',
                controller: 'CreateExternalTrainingFeedbackController',
                controllerAs: 'vm'
            }
        )
        .when(
             lsprNav.training.external.feedback._action.detail, {
                templateUrl: 'components/04-training/external/feedback/detail/detail-feedback.html',
                controller: 'DetailExternalTrainingFeedbackController',
                controllerAs: 'vm'
             }
        )
        .when(
             lsprNav.training.external.participant.path, {
                templateUrl: 'components/04-training/external/participant/training-participant.html',
                controller: 'ExternalTrainingParticipantController',
                controllerAs: 'vm'
             }
        )
        .when(
             lsprNav.training.external.participant.attendance.path, {
                templateUrl: 'components/04-training/external/participant/attendance/participant-attendance.html',
                controller: 'ExternalTrainingParticipantAttendanceController',
                controllerAs: 'vm'
             }
        )
        .when(
            lsprNav.training.schedule.path, {
                templateUrl: 'components/04-training/schedule/training-schedule.html',
                controller: 'TrainingScheduleController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.training.schedule._action.create, {
                templateUrl: 'components/04-training/schedule/create/create-schedule.html',
                controller: 'CreateTrainingScheduleController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.training.scholarship.path, {
                templateUrl: 'components/04-training/scholarship/training-scholarship.html',
                controller: 'TrainingScholarshipController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.training.scholarship._action.create, {
                templateUrl: 'components/04-training/scholarship/create/create-scholarship.html',
                controller: 'CreateTrainingScholarshipController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.training.scholarship._action.edit, {
                templateUrl: 'components/04-training/scholarship/edit/edit-scholarship.html',
                controller: 'EditTrainingScholarshipController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.training.settings.path, {
                templateUrl: 'components/04-training/settings/training-settings.html',
                controller: 'TrainingSettingsController',
                controllerAs: 'vm'
            }
        )
        .when(
            lsprNav.training.scholarship._action.paymentDetail, {
                templateUrl: 'components/04-training/scholarship/payment-detail/payment-detail.html',
                controller: 'TrainingScholarshipPaymentDetailController',
                controllerAs: 'vm'
            }
        ).when(
            lsprNav.training.businessTrip.path, {
                templateUrl: 'components/04-training/business-trip/business-trip.html',
                controller: 'BusinessTripController',
                controllerAs: 'vm'
            }
        ).when(
            lsprNav.training.businessTrip._action.create, {
                templateUrl: 'components/04-training/business-trip/create/create-business-trip.html',
                controller: 'CreateBusinessTripController',
                controllerAs: 'vm'
            }
        ).when(
            lsprNav.training.businessTrip._action.detail, {
                templateUrl: 'components/04-training/business-trip/detail/detail-business-trip.html',
                controller: 'DetailBusinessTripController',
                controllerAs: 'vm'
            }
        );

 }]);
