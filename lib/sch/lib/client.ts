/**
 * Service Connector Hub API
 * Use the Service Connector Hub API to transfer data between services in Oracle Cloud Infrastructure.
For more information about Service Connector Hub, see
[Service Connector Hub Overview](/iaas/Content/service-connector-hub/overview.htm).

 * OpenAPI spec version: 20200909
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as models from "./model";
import * as responses from "./response";
import { ServiceConnectorWaiter } from "./serviceconnector-waiter";
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ServiceConnectorApiKeys {}

export class ServiceConnectorClient {
  protected static serviceEndpointTemplate =
    "https://service-connector-hub.{region}.oci.{secondLevelDomain}";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_waiters": ServiceConnectorWaiter;
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    if (clientConfiguration) {
      this._clientConfiguration = clientConfiguration;
      this._circuitBreaker = clientConfiguration.circuitBreaker
        ? clientConfiguration.circuitBreaker!.circuit
        : null;
    }
    this._httpClient =
      params.httpClient || new common.FetchHttpClient(requestSigner, this._circuitBreaker);

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/20200909";
    if (this.logger) this.logger.info(`ServiceConnectorClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      ServiceConnectorClient.serviceEndpointTemplate,
      region
    );
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      ServiceConnectorClient.serviceEndpointTemplate,
      regionId
    );
  }

  /**
   * Creates a new ServiceConnectorWaiter for resources for this service.
   *
   * @param config The waiter configuration for termination and delay strategy
   * @return The service waiters.
   */
  public createWaiters(config?: common.WaiterConfiguration): ServiceConnectorWaiter {
    this._waiters = new ServiceConnectorWaiter(this, config);
    return this._waiters;
  }

  /**
   * Gets the waiters available for resources for this service.
   *
   * @return The service waiters.
   */
  public getWaiters(): ServiceConnectorWaiter {
    if (this._waiters) {
      return this._waiters;
    }
    throw Error("Waiters do not exist. Please create waiters.");
  }

  /**
     * Activates the specified service connector.
* <p>
After you send your request, the service connector's state is temporarily
* UPDATING. When the state changes to ACTIVE, data begins transferring from the
* source service to the target service. For instructions on activating service
* connectors, see
* [To activate a service connector](https://docs.cloud.oracle.com/iaas/Content/service-connector-hub/managingconnectors.htm#activate).
* 
     * @param ActivateServiceConnectorRequest
     * @return ActivateServiceConnectorResponse
     * @throws OciError when an error occurs
     * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/sch/ActivateServiceConnector.ts.html |here} to see how to use ActivateServiceConnector API.
     */
  public async activateServiceConnector(
    activateServiceConnectorRequest: requests.ActivateServiceConnectorRequest
  ): Promise<responses.ActivateServiceConnectorResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ServiceConnectorClient#activateServiceConnector.");
    const pathParams = {
      "{serviceConnectorId}": activateServiceConnectorRequest.serviceConnectorId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-retry-token": activateServiceConnectorRequest.opcRetryToken,
      "if-match": activateServiceConnectorRequest.ifMatch,
      "opc-request-id": activateServiceConnectorRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      activateServiceConnectorRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/serviceConnectors/{serviceConnectorId}/actions/activate",
      method: "POST",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ActivateServiceConnectorResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
     * Moves a service connector into a different compartment within the same tenancy.
* For information about moving resources between compartments, see
* [Moving Resources to a Different Compartment](https://docs.cloud.oracle.com/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).
* <p>
When provided, If-Match is checked against ETag values of the resource.
* 
     * @param ChangeServiceConnectorCompartmentRequest
     * @return ChangeServiceConnectorCompartmentResponse
     * @throws OciError when an error occurs
     * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/sch/ChangeServiceConnectorCompartment.ts.html |here} to see how to use ChangeServiceConnectorCompartment API.
     */
  public async changeServiceConnectorCompartment(
    changeServiceConnectorCompartmentRequest: requests.ChangeServiceConnectorCompartmentRequest
  ): Promise<responses.ChangeServiceConnectorCompartmentResponse> {
    if (this.logger)
      this.logger.debug(
        "Calling operation ServiceConnectorClient#changeServiceConnectorCompartment."
      );
    const pathParams = {
      "{serviceConnectorId}": changeServiceConnectorCompartmentRequest.serviceConnectorId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": changeServiceConnectorCompartmentRequest.ifMatch,
      "opc-request-id": changeServiceConnectorCompartmentRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      changeServiceConnectorCompartmentRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/serviceConnectors/{serviceConnectorId}/actions/changeCompartment",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        changeServiceConnectorCompartmentRequest.changeServiceConnectorCompartmentDetails,
        "ChangeServiceConnectorCompartmentDetails",
        models.ChangeServiceConnectorCompartmentDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ChangeServiceConnectorCompartmentResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
     * Creates a new service connector in the specified compartment.
* A service connector is a logically defined flow for moving data from
* a source service to a destination service in Oracle Cloud Infrastructure.
* For general information about service connectors, see
* [Service Connector Hub Overview](https://docs.cloud.oracle.com/iaas/Content/service-connector-hub/overview.htm).
* <p>
For purposes of access control, you must provide the
* [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment where
* you want the service connector to reside. Notice that the service connector
* doesn't have to be in the same compartment as the source or target services.
* For information about access control and compartments, see
* [Overview of the IAM Service](https://docs.cloud.oracle.com/iaas/Content/Identity/Concepts/overview.htm).
* <p>
After you send your request, the new service connector's state is temporarily
* CREATING. When the state changes to ACTIVE, data begins transferring from the
* source service to the target service. For instructions on deactivating and
* activating service connectors, see
* [To activate or deactivate a service connector](https://docs.cloud.oracle.com/iaas/Content/service-connector-hub/overview.htm).
* 
     * @param CreateServiceConnectorRequest
     * @return CreateServiceConnectorResponse
     * @throws OciError when an error occurs
     * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/sch/CreateServiceConnector.ts.html |here} to see how to use CreateServiceConnector API.
     */
  public async createServiceConnector(
    createServiceConnectorRequest: requests.CreateServiceConnectorRequest
  ): Promise<responses.CreateServiceConnectorResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ServiceConnectorClient#createServiceConnector.");
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-retry-token": createServiceConnectorRequest.opcRetryToken,
      "opc-request-id": createServiceConnectorRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      createServiceConnectorRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/serviceConnectors",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createServiceConnectorRequest.createServiceConnectorDetails,
        "CreateServiceConnectorDetails",
        models.CreateServiceConnectorDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.CreateServiceConnectorResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
     * Deactivates the specified service connector.
* <p>
After you send your request, the service connector's state is temporarily
* UPDATING and any data transfer stops. The state then changes to INACTIVE.
* For instructions on deactivating service connectors, see
* [To deactivate a service connector](https://docs.cloud.oracle.com/iaas/Content/service-connector-hub/managingconnectors.htm#deactivate).
* 
     * @param DeactivateServiceConnectorRequest
     * @return DeactivateServiceConnectorResponse
     * @throws OciError when an error occurs
     * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/sch/DeactivateServiceConnector.ts.html |here} to see how to use DeactivateServiceConnector API.
     */
  public async deactivateServiceConnector(
    deactivateServiceConnectorRequest: requests.DeactivateServiceConnectorRequest
  ): Promise<responses.DeactivateServiceConnectorResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ServiceConnectorClient#deactivateServiceConnector.");
    const pathParams = {
      "{serviceConnectorId}": deactivateServiceConnectorRequest.serviceConnectorId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-retry-token": deactivateServiceConnectorRequest.opcRetryToken,
      "if-match": deactivateServiceConnectorRequest.ifMatch,
      "opc-request-id": deactivateServiceConnectorRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      deactivateServiceConnectorRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/serviceConnectors/{serviceConnectorId}/actions/deactivate",
      method: "POST",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.DeactivateServiceConnectorResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
     * Deletes the specified service connector.
* <p>
After you send your request, the service connector's state is temporarily
* DELETING and any data transfer stops. The state then changes to DELETED.
* 
     * @param DeleteServiceConnectorRequest
     * @return DeleteServiceConnectorResponse
     * @throws OciError when an error occurs
     * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/sch/DeleteServiceConnector.ts.html |here} to see how to use DeleteServiceConnector API.
     */
  public async deleteServiceConnector(
    deleteServiceConnectorRequest: requests.DeleteServiceConnectorRequest
  ): Promise<responses.DeleteServiceConnectorResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ServiceConnectorClient#deleteServiceConnector.");
    const pathParams = {
      "{serviceConnectorId}": deleteServiceConnectorRequest.serviceConnectorId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": deleteServiceConnectorRequest.ifMatch,
      "opc-request-id": deleteServiceConnectorRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      deleteServiceConnectorRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/serviceConnectors/{serviceConnectorId}",
      method: "DELETE",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.DeleteServiceConnectorResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets the specified service connector's configuration information.
   *
   * @param GetServiceConnectorRequest
   * @return GetServiceConnectorResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/sch/GetServiceConnector.ts.html |here} to see how to use GetServiceConnector API.
   */
  public async getServiceConnector(
    getServiceConnectorRequest: requests.GetServiceConnectorRequest
  ): Promise<responses.GetServiceConnectorResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ServiceConnectorClient#getServiceConnector.");
    const pathParams = {
      "{serviceConnectorId}": getServiceConnectorRequest.serviceConnectorId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getServiceConnectorRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      getServiceConnectorRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/serviceConnectors/{serviceConnectorId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetServiceConnectorResponse>{},
        body: await response.json(),
        bodyKey: "serviceConnector",
        bodyModel: "model.ServiceConnector",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets the details of the specified work request.
   *
   * @param GetWorkRequestRequest
   * @return GetWorkRequestResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/sch/GetWorkRequest.ts.html |here} to see how to use GetWorkRequest API.
   */
  public async getWorkRequest(
    getWorkRequestRequest: requests.GetWorkRequestRequest
  ): Promise<responses.GetWorkRequestResponse> {
    if (this.logger) this.logger.debug("Calling operation ServiceConnectorClient#getWorkRequest.");
    const pathParams = {
      "{workRequestId}": getWorkRequestRequest.workRequestId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getWorkRequestRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      getWorkRequestRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests/{workRequestId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.GetWorkRequestResponse>{},
        body: await response.json(),
        bodyKey: "workRequest",
        bodyModel: "model.WorkRequest",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("retry-after"),
            key: "retryAfter",
            dataType: "number"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Lists service connectors in the specified compartment.
   *
   * @param ListServiceConnectorsRequest
   * @return ListServiceConnectorsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/sch/ListServiceConnectors.ts.html |here} to see how to use ListServiceConnectors API.
   */
  public async listServiceConnectors(
    listServiceConnectorsRequest: requests.ListServiceConnectorsRequest
  ): Promise<responses.ListServiceConnectorsResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ServiceConnectorClient#listServiceConnectors.");
    const pathParams = {};

    const queryParams = {
      "compartmentId": listServiceConnectorsRequest.compartmentId,
      "lifecycleState": listServiceConnectorsRequest.lifecycleState,
      "displayName": listServiceConnectorsRequest.displayName,
      "limit": listServiceConnectorsRequest.limit,
      "page": listServiceConnectorsRequest.page,
      "sortOrder": listServiceConnectorsRequest.sortOrder,
      "sortBy": listServiceConnectorsRequest.sortBy
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listServiceConnectorsRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listServiceConnectorsRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/serviceConnectors",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListServiceConnectorsResponse>{},
        body: await response.json(),
        bodyKey: "serviceConnectorCollection",
        bodyModel: "model.ServiceConnectorCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-prev-page"),
            key: "opcPrevPage",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Lists work request errors for the specified work request. Results are paginated.
   *
   * @param ListWorkRequestErrorsRequest
   * @return ListWorkRequestErrorsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/sch/ListWorkRequestErrors.ts.html |here} to see how to use ListWorkRequestErrors API.
   */
  public async listWorkRequestErrors(
    listWorkRequestErrorsRequest: requests.ListWorkRequestErrorsRequest
  ): Promise<responses.ListWorkRequestErrorsResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ServiceConnectorClient#listWorkRequestErrors.");
    const pathParams = {
      "{workRequestId}": listWorkRequestErrorsRequest.workRequestId
    };

    const queryParams = {
      "page": listWorkRequestErrorsRequest.page,
      "limit": listWorkRequestErrorsRequest.limit
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listWorkRequestErrorsRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listWorkRequestErrorsRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests/{workRequestId}/errors",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListWorkRequestErrorsResponse>{},
        body: await response.json(),
        bodyKey: "workRequestErrorCollection",
        bodyModel: "model.WorkRequestErrorCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-prev-page"),
            key: "opcPrevPage",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Lists logs for the specified work request. Results are paginated.
   *
   * @param ListWorkRequestLogsRequest
   * @return ListWorkRequestLogsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/sch/ListWorkRequestLogs.ts.html |here} to see how to use ListWorkRequestLogs API.
   */
  public async listWorkRequestLogs(
    listWorkRequestLogsRequest: requests.ListWorkRequestLogsRequest
  ): Promise<responses.ListWorkRequestLogsResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ServiceConnectorClient#listWorkRequestLogs.");
    const pathParams = {
      "{workRequestId}": listWorkRequestLogsRequest.workRequestId
    };

    const queryParams = {
      "page": listWorkRequestLogsRequest.page,
      "limit": listWorkRequestLogsRequest.limit
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listWorkRequestLogsRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listWorkRequestLogsRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests/{workRequestId}/logs",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListWorkRequestLogsResponse>{},
        body: await response.json(),
        bodyKey: "workRequestLogEntryCollection",
        bodyModel: "model.WorkRequestLogEntryCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-prev-page"),
            key: "opcPrevPage",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Lists the work requests in the specified compartment.
   *
   * @param ListWorkRequestsRequest
   * @return ListWorkRequestsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/sch/ListWorkRequests.ts.html |here} to see how to use ListWorkRequests API.
   */
  public async listWorkRequests(
    listWorkRequestsRequest: requests.ListWorkRequestsRequest
  ): Promise<responses.ListWorkRequestsResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ServiceConnectorClient#listWorkRequests.");
    const pathParams = {};

    const queryParams = {
      "compartmentId": listWorkRequestsRequest.compartmentId,
      "page": listWorkRequestsRequest.page,
      "limit": listWorkRequestsRequest.limit
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listWorkRequestsRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      listWorkRequestsRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/workRequests",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.ListWorkRequestsResponse>{},
        body: await response.json(),
        bodyKey: "workRequestCollection",
        bodyModel: "model.WorkRequestCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-prev-page"),
            key: "opcPrevPage",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
     * Updates the configuration information for the specified service connector.
* <p>
After you send your request, the service connector's state is temporarily
* UPDATING and any data transfer pauses. The state then changes back to its
* original value: if ACTIVE, then data transfer resumes.
* 
     * @param UpdateServiceConnectorRequest
     * @return UpdateServiceConnectorResponse
     * @throws OciError when an error occurs
     * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/sch/UpdateServiceConnector.ts.html |here} to see how to use UpdateServiceConnector API.
     */
  public async updateServiceConnector(
    updateServiceConnectorRequest: requests.UpdateServiceConnectorRequest
  ): Promise<responses.UpdateServiceConnectorResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ServiceConnectorClient#updateServiceConnector.");
    const pathParams = {
      "{serviceConnectorId}": updateServiceConnectorRequest.serviceConnectorId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": updateServiceConnectorRequest.ifMatch,
      "opc-request-id": updateServiceConnectorRequest.opcRequestId
    };

    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : {},
      updateServiceConnectorRequest.retryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/serviceConnectors/{serviceConnectorId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateServiceConnectorRequest.updateServiceConnectorDetails,
        "UpdateServiceConnectorDetails",
        models.UpdateServiceConnectorDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(this._httpClient, request);
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateServiceConnectorResponse>{},
        responseHeaders: [
          {
            value: response.headers.get("opc-work-request-id"),
            key: "opcWorkRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }
}
