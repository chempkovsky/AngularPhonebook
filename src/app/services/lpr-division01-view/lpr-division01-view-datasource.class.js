"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LprDivision01ViewDatasource = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var of_1 = require("rxjs/internal/observable/of");
var LprDivision01ViewDatasource = /** @class */ (function () {
    function LprDivision01ViewDatasource(frmRootSrv, appGlblSettings, ClientViewName, DirectNavigation, CurrentlyDirectMasterNavs, UIFormChain) {
        this.frmRootSrv = frmRootSrv;
        this.appGlblSettings = appGlblSettings;
        this._CurrentViewName = 'LprDivision01View';
        this._IsDefined = false;
        // master name, navigation name, master filed, master filed value
        this._HiddenFilter = {};
        this._UnderHiddenFilterFields = [];
        this._IsNew = true;
        this._UIFormChain = '';
        this._Values = {
            'divisionId': undefined,
            'divisionNameIdRef': undefined, // number, System.Int32
        };
        this.OnDetailChanged = new core_1.EventEmitter();
        this.OnMasterChanged = new core_1.EventEmitter();
        this.AfterMasterChanged = new core_1.EventEmitter();
        this.AfterPropsChanged = new core_1.EventEmitter();
        this.OnIsDefinedChanged = new core_1.EventEmitter();
        this.OnUpdate = new core_1.EventEmitter();
        this.OnAdd = new core_1.EventEmitter();
        this.OnDelete = new core_1.EventEmitter();
        this._ClientViewName = ClientViewName;
        this._DirectNavigation = DirectNavigation;
        this._CurrentlyDirectMasterNavs = CurrentlyDirectMasterNavs;
        this._UIFormChain = UIFormChain;
    }
    LprDivision01ViewDatasource.prototype.doEmitEvent = function (aftrMstrChngd) {
        if (aftrMstrChngd === void 0) { aftrMstrChngd = false; }
        var isDef = this.calcIsDefined();
        if (this._IsDefined !== isDef) {
            this._IsDefined = isDef;
            this.OnIsDefinedChanged.emit(this);
        }
        this.OnDetailChanged.emit(this);
        this.OnMasterChanged.emit(this);
        if (aftrMstrChngd)
            this.AfterMasterChanged.emit(this);
        this.AfterPropsChanged.emit(this);
    };
    LprDivision01ViewDatasource.prototype.getHiddenFilterByRow = function (rw, nvNm) {
        return this.frmRootSrv.getHiddenFilterByRow(rw, nvNm);
    };
    LprDivision01ViewDatasource.prototype.getHiddenFilterByFltRslt = function (fr) {
        return this.frmRootSrv.getHiddenFilterByFltRslt(fr);
    };
    LprDivision01ViewDatasource.prototype.refreshIsDefined = function () {
        this._IsDefined = this.calcIsDefined();
        return this._IsDefined;
    };
    LprDivision01ViewDatasource.prototype.calcIsDefined = function () {
        for (var i in this._Values) {
            if ((!this.frmRootSrv.dbgeneratedValue(i)) &&
                this.frmRootSrv.requiredValue(i)) {
                if (!this.isSetValue(i))
                    return false;
            }
        }
        return true;
    };
    LprDivision01ViewDatasource.prototype.getUIFormChain = function () {
        return this._UIFormChain;
    };
    LprDivision01ViewDatasource.prototype.getHiddenFilter = function () {
        return this._HiddenFilter;
    };
    LprDivision01ViewDatasource.prototype.getHiddenFilterAsFltRslt = function () {
        return this.frmRootSrv.getHiddenFilterAsFltRslt(this._HiddenFilter);
    };
    LprDivision01ViewDatasource.prototype.setHiddenFilter = function (fltr) {
        this._HiddenFilter = fltr;
        this.setUnderHiddenFilterFields();
    };
    LprDivision01ViewDatasource.prototype.getIsTopDetail = function () {
        return this._UIFormChain === '';
    };
    LprDivision01ViewDatasource.prototype.getIsDefined = function () {
        return this._IsDefined;
    };
    LprDivision01ViewDatasource.prototype.getCurrentViewName = function () {
        return this._CurrentViewName;
    };
    LprDivision01ViewDatasource.prototype.getClientViewName = function () {
        return this._ClientViewName;
    };
    LprDivision01ViewDatasource.prototype.getDirectNavigation = function () {
        return this._DirectNavigation;
    };
    LprDivision01ViewDatasource.prototype.getLength = function () {
        return this.frmRootSrv.getLength();
    };
    LprDivision01ViewDatasource.prototype.getKeys = function () {
        return this.frmRootSrv.getKeys();
    };
    LprDivision01ViewDatasource.prototype.getDtTpValue = function (key) {
        return this.frmRootSrv.getDtTpValue(key);
    };
    LprDivision01ViewDatasource.prototype.getValue = function (key) {
        return this._Values[key];
    };
    LprDivision01ViewDatasource.prototype.setValue = function (key, value) {
        if (this.frmRootSrv.getDtTpValue(key) === 'boolean') {
            if (typeof value === 'undefined') {
                this._Values[key] = false;
            }
            else {
                this._Values[key] = value;
            }
        }
        else {
            return this._Values[key] = value;
        }
    };
    LprDivision01ViewDatasource.prototype.getByOrgValue = function (org, fkchain) {
        var i = this.frmRootSrv.getKeyByOrgValue(org, fkchain);
        if (typeof i === 'undefined')
            return undefined;
        return this._Values[i];
    };
    LprDivision01ViewDatasource.prototype.setByOrgValue = function (org, fkchain, value) {
        var i = this.frmRootSrv.getKeyByOrgValue(org, fkchain);
        if (!(typeof i === 'undefined'))
            this._Values[i] = value;
    };
    LprDivision01ViewDatasource.prototype.requiredValue = function (key) {
        return this.frmRootSrv.requiredValue(key);
    };
    LprDivision01ViewDatasource.prototype.dbgeneratedValue = function (key) {
        return this.frmRootSrv.requiredValue(key);
    };
    LprDivision01ViewDatasource.prototype.isInPrimkeyValue = function (key) {
        return this.frmRootSrv.isInPrimkeyValue(key);
    };
    LprDivision01ViewDatasource.prototype.isSetValue = function (key) {
        var v = this._Values[key];
        if (typeof v === 'undefined')
            return false;
        if (this.requiredValue(key) && (v === null))
            return false;
        return true;
    };
    LprDivision01ViewDatasource.prototype.clearValue = function (key) {
        if (this.frmRootSrv.getDtTpValue(key) === 'boolean') {
            this._Values[key] = false;
        }
        else {
            this._Values[key] = undefined;
        }
    };
    LprDivision01ViewDatasource.prototype.clear = function (doNotify) {
        if (doNotify === void 0) { doNotify = true; }
        var hasChanged = false;
        for (var i in this._Values) {
            if (this.frmRootSrv.getDtTpValue(i) === 'boolean') {
                if (this._Values[i] !== false)
                    hasChanged = true;
                this._Values[i] = false;
            }
            else {
                if (typeof this._Values[i] !== 'undefined')
                    hasChanged = true;
                this._Values[i] = undefined;
            }
        }
        if (!hasChanged)
            return hasChanged;
        if (doNotify)
            this.doEmitEvent(true);
        return hasChanged;
    };
    LprDivision01ViewDatasource.prototype.isEqual = function (src, dest) {
        if (typeof src === 'undefined') {
            return typeof dest === 'undefined';
        }
        if (typeof dest === 'undefined') {
            return false;
        }
        if (src === null) {
            return dest === null;
        }
        if (dest === null) {
            return true;
        }
        return src === dest;
    };
    LprDivision01ViewDatasource.prototype.interface2Values = function (data, doNotify) {
        if (doNotify === void 0) { doNotify = true; }
        if (typeof data === 'undefined') {
            return this.clear(doNotify);
        }
        if (data === null) {
            return this.clear(doNotify);
        }
        var hasChanged = false;
        var aftrMstrChngd = false;
        if (!this.isEqual(this.getValue('divisionId'), data.divisionId)) {
            this.setValue('divisionId', data.divisionId);
            aftrMstrChngd = (this._CurrentlyDirectMasterNavs.indexOf('Division') >= 0) || aftrMstrChngd;
            hasChanged = true;
        }
        if (!this.isEqual(this.getValue('divisionNameIdRef'), data.divisionNameIdRef)) {
            this.setValue('divisionNameIdRef', data.divisionNameIdRef);
            aftrMstrChngd = (this._CurrentlyDirectMasterNavs.indexOf('DivisionNameDict') >= 0) || aftrMstrChngd;
            hasChanged = true;
        }
        if (!hasChanged)
            return hasChanged;
        if (doNotify)
            this.doEmitEvent(aftrMstrChngd);
        return hasChanged;
    };
    LprDivision01ViewDatasource.prototype.values2Interface = function () {
        return {
            divisionId: this.getValue('divisionId'),
            divisionNameIdRef: this.getValue('divisionNameIdRef'),
        };
    };
    LprDivision01ViewDatasource.prototype.submitOnDetailChanged = function (v) {
        if ((typeof this._ClientViewName === 'undefined') || (typeof this._DirectNavigation === 'undefined'))
            return;
        if ((this._ClientViewName === null) || (this._DirectNavigation === null))
            return;
        if (v.getCurrentViewName() !== this._ClientViewName)
            return;
        var clntNtChngd = true;
        var c2mfm = this.frmRootSrv.getc2mfm();
        if (Object.keys(c2mfm).indexOf(this._ClientViewName) > -1) {
            if (Object.keys(c2mfm[this._ClientViewName]).indexOf(this._DirectNavigation) > -1) {
                for (var i in c2mfm[this._ClientViewName][this._DirectNavigation]) {
                    var src = v.getValue(i);
                    var dst = this.getValue(c2mfm[this._ClientViewName][this._DirectNavigation][i]);
                    if (this.isEqual(src, dst))
                        continue;
                    clntNtChngd = false;
                    this.setValue(c2mfm[this._ClientViewName][this._DirectNavigation][i], src);
                }
            }
        }
        if (clntNtChngd)
            return;
    };
    LprDivision01ViewDatasource.prototype.clearPartially = function (doNotify) {
        var hasChanged = false;
        if (!this.isUnderHiddenFilterFields('divisionId')) {
            if (this._CurrentlyDirectMasterNavs.indexOf('Division') < 0) {
                if (this.isSetValue('divisionId')) {
                    this.clearValue('divisionId');
                    hasChanged = true;
                }
            }
        }
        if (!this.isUnderHiddenFilterFields('divisionNameIdRef')) {
            if (this._CurrentlyDirectMasterNavs.indexOf('DivisionNameDict') < 0) {
                if (this.isSetValue('divisionNameIdRef')) {
                    this.clearValue('divisionNameIdRef');
                    hasChanged = true;
                }
            }
        }
        if (!hasChanged)
            return hasChanged;
        if (doNotify)
            this.doEmitEvent(false);
        return hasChanged;
    };
    LprDivision01ViewDatasource.prototype.submitOnMasterChanged = function (v) {
        var masterDirNav = v.getDirectNavigation();
        var masterClnt = v.getClientViewName();
        if ((typeof masterDirNav === 'undefined') || (typeof masterClnt == 'undefined'))
            return;
        if ((masterDirNav === null) || (masterClnt === null))
            return;
        if (masterClnt !== this.getCurrentViewName())
            return;
        var clntNtChngd = true;
        var masterVw = v.getCurrentViewName();
        var m2cKeyfm = this.frmRootSrv.getm2cKeyfm();
        var m2cfm = this.frmRootSrv.getm2cfm();
        if (Object.keys(m2cKeyfm).indexOf(masterVw) > -1) {
            if (Object.keys(m2cKeyfm[masterVw]).indexOf(masterDirNav) > -1) {
                for (var i in m2cKeyfm[masterVw][masterDirNav]) {
                    var src = v.getValue(i);
                    var dst = this.getValue(m2cKeyfm[masterVw][masterDirNav][i].propNm);
                    if (this.isEqual(src, dst))
                        continue;
                    clntNtChngd = false;
                    this.setValue(m2cKeyfm[masterVw][masterDirNav][i].propNm, src);
                }
            }
        }
        if (Object.keys(m2cfm).indexOf(masterVw) > -1) {
            if (Object.keys(m2cfm[masterVw]).indexOf(masterDirNav) > -1) {
                for (var i in m2cfm[masterVw][masterDirNav]) {
                    var src = v.getValue(i);
                    if (this.isEqual(src, this.getValue(m2cfm[masterVw][masterDirNav][i])))
                        continue;
                    clntNtChngd = false;
                    this.setValue(m2cfm[masterVw][masterDirNav][i], src);
                }
            }
        }
        if (clntNtChngd)
            return;
        // clear primary and unique key props of the current ViewModel. Eliminate those associated with the current direct master props.
        if (!this.getIsTopDetail()) {
            this.clearPartially(false);
        }
        this.doEmitEvent(true);
    };
    LprDivision01ViewDatasource.prototype.isSetFilterByCurrDirMstrs = function () {
        var m2cKeyfm = this.frmRootSrv.getm2cKeyfm();
        for (var i in m2cKeyfm) {
            for (var j in m2cKeyfm[i]) {
                if (this._CurrentlyDirectMasterNavs.indexOf(j) > -1) {
                    for (var k in m2cKeyfm[i][j]) {
                        if (m2cKeyfm[i][j][k].isMstrReq && (!this.isSetValue(m2cKeyfm[i][j][k].propNm)))
                            return false;
                    }
                }
            }
        }
        return true;
    };
    LprDivision01ViewDatasource.prototype.getWSFltrRsltByCurrDirMstrs = function () {
        var rslt = [];
        var m2cKeyfm = this.frmRootSrv.getm2cKeyfm();
        for (var i in m2cKeyfm) {
            for (var j in m2cKeyfm[i]) {
                if (this._CurrentlyDirectMasterNavs.indexOf(j) > -1) {
                    for (var k in m2cKeyfm[i][j]) {
                        if (this.isSetValue(m2cKeyfm[i][j][k].propNm)) {
                            rslt.push({
                                fltrName: m2cKeyfm[i][j][k].propNm,
                                fltrDataType: this.getDtTpValue(m2cKeyfm[i][j][k].propNm),
                                fltrOperator: 'eq',
                                fltrValue: this.getValue(m2cKeyfm[i][j][k].propNm)
                            });
                        }
                    }
                }
            }
        }
        return rslt;
    };
    LprDivision01ViewDatasource.prototype.getFilterByCurrDirMstrs = function () {
        var flt = {}; // ILprDivision01ViewFilter
        var m2cKeyfm = this.frmRootSrv.getm2cKeyfm();
        for (var i in m2cKeyfm) {
            for (var j in m2cKeyfm[i]) {
                if (this._CurrentlyDirectMasterNavs.indexOf(j) > -1) {
                    for (var k in m2cKeyfm[i][j]) {
                        if (this.isSetValue(m2cKeyfm[i][j][k].propNm)) {
                            var nm = m2cKeyfm[i][j][k].propNm;
                            var op = nm + 'Oprtr';
                            if (typeof flt[nm] === 'undefined') {
                                flt[nm] = [this.getValue(nm)];
                                flt[op] = ['eq'];
                            }
                            else {
                                flt[nm].push(this.getValue(nm));
                                flt[op].push('eq');
                            }
                        }
                    }
                }
            }
        }
        return flt;
    };
    LprDivision01ViewDatasource.prototype.handleError = function (result) {
        var _this = this;
        return function (error) {
            _this.appGlblSettings.showError('http', error);
            return (0, of_1.of)(result);
        };
    };
    // add input string to define flt.orderby prop
    LprDivision01ViewDatasource.prototype.getCllctionByCurrDirMstrs = function () {
        if (!this.isSetFilterByCurrDirMstrs()) {
            return (0, of_1.of)([]);
        }
        var flt = this.getFilterByCurrDirMstrs();
        return this.frmRootSrv.getwithfilter(flt)
            .pipe((0, rxjs_1.switchMap)(function (rslt) {
            if (!(typeof rslt === 'undefined')) {
                if (!(rslt === null)) {
                    if (!(typeof rslt.items === 'undefined')) {
                        if (Array.isArray(rslt.items)) {
                            return (0, of_1.of)(rslt.items);
                        }
                    }
                }
            }
            return (0, of_1.of)([]);
        }), (0, rxjs_1.catchError)(this.handleError([])));
    };
    LprDivision01ViewDatasource.prototype.getCllctionByFldFilter = function (fldName, fldVal) {
        var isUndef = (typeof fldName === 'undefined') || (typeof fldVal === 'undefined');
        isUndef = isUndef ? isUndef : (fldVal === null);
        if (isUndef) {
            return this.getCllctionByCurrDirMstrs();
        }
        if (!this.isSetFilterByCurrDirMstrs()) {
            return (0, of_1.of)([]);
        }
        var flt = this.getFilterByCurrDirMstrs();
        if (typeof flt[fldName] === 'undefined') {
            flt[fldName] = [fldVal];
        }
        else {
            flt[fldName].push(fldVal);
        }
        if (typeof flt[fldName + 'Oprtr'] === 'undefined') {
            flt[fldName + 'Oprtr'] = ['lk'];
        }
        else {
            flt[fldName + 'Oprtr'].push('lk');
        }
        flt.orderby = fldName;
        return this.frmRootSrv.getwithfilter(flt)
            .pipe((0, rxjs_1.switchMap)(function (rslt) {
            if (!(typeof rslt === 'undefined')) {
                if (!(rslt === null)) {
                    if (!(typeof rslt.items === 'undefined')) {
                        if (Array.isArray(rslt.items)) {
                            return (0, of_1.of)(rslt.items);
                        }
                    }
                }
            }
            return (0, of_1.of)([]);
        }), (0, rxjs_1.catchError)(this.handleError([])));
    };
    LprDivision01ViewDatasource.prototype.getone = function (divisionNameIdRef, divisionId) {
        var _this = this;
        this.frmRootSrv.getone(divisionNameIdRef, divisionId).subscribe({
            next: function (data) {
                if (!_this.interface2Values(data, true)) {
                    _this.doEmitEvent(true);
                }
                ;
            },
            error: function (error) {
                _this.appGlblSettings.showError('http', error);
            }
        });
    };
    LprDivision01ViewDatasource.prototype.refresh = function () {
        if (this.isSetValue('divisionNameIdRef')
            && this.isSetValue('divisionId')) {
            this.getone(this.getValue('divisionNameIdRef'), this.getValue('divisionId'));
            return;
        }
        this.appGlblSettings.showError('http', { message: $localize(templateObject_1 || (templateObject_1 = __makeTemplateObject([":Not all Unique or Primary key properties are defined to call Refresh-method@@LprDivision01ViewDatasourcerefresh.Not-all-Unique-Primary:Not all Unique or Primary key properties are defined to call Refresh-method"], [":Not all Unique or Primary key properties are defined to call Refresh-method@@LprDivision01ViewDatasourcerefresh.Not-all-Unique-Primary:Not all Unique or Primary key properties are defined to call Refresh-method"]))) });
    };
    LprDivision01ViewDatasource.prototype.updateone = function () {
        var _this = this;
        if (!this.getIsDefined()) {
            this.appGlblSettings.showError('http', { message: $localize(templateObject_2 || (templateObject_2 = __makeTemplateObject([":Not all propertes are correctly defined@@LprDivision01ViewDatasourceupdateone.Not-all-propertes:Not all propertes are correctly defined"], [":Not all propertes are correctly defined@@LprDivision01ViewDatasourceupdateone.Not-all-propertes:Not all propertes are correctly defined"]))) });
            return;
        }
        var itm = this.values2Interface();
        this.frmRootSrv.updateone(itm).subscribe({
            next: function (data) {
                _this.interface2Values(data, false);
                _this.OnUpdate.emit(_this);
            },
            error: function (error) {
                _this.appGlblSettings.showError('http', error);
            }
        });
    };
    LprDivision01ViewDatasource.prototype.addone = function () {
        var _this = this;
        if (!this.getIsDefined()) {
            this.appGlblSettings.showError('http', { message: $localize(templateObject_3 || (templateObject_3 = __makeTemplateObject([":Not all propertes are correctly defined@@LprDivision01ViewDatasourceaddone.Not-all-propertes:Not all propertes are correctly defined"], [":Not all propertes are correctly defined@@LprDivision01ViewDatasourceaddone.Not-all-propertes:Not all propertes are correctly defined"]))) });
            return;
        }
        var itm = this.values2Interface();
        this.frmRootSrv.addone(itm).subscribe({
            next: function (data) {
                _this.interface2Values(data, false);
                _this.OnAdd.emit(_this);
            },
            error: function (error) {
                _this.appGlblSettings.showError('http', error);
            }
        });
    };
    LprDivision01ViewDatasource.prototype.deleteone = function () {
        var _this = this;
        if (!this.getIsDefined()) {
            this.appGlblSettings.showError('http', { message: $localize(templateObject_4 || (templateObject_4 = __makeTemplateObject([":Not all propertes are correctly defined@@LprDivision01ViewDatasourcedeleteone.Not-all-propertes:Not all propertes are correctly defined"], [":Not all propertes are correctly defined@@LprDivision01ViewDatasourcedeleteone.Not-all-propertes:Not all propertes are correctly defined"]))) });
            return;
        }
        this.frmRootSrv.deleteone(this.getValue('divisionNameIdRef'), this.getValue('divisionId')).subscribe({
            next: function (data) {
                _this.interface2Values(data, false);
                _this.OnDelete.emit(_this);
            },
            error: function (error) {
                _this.appGlblSettings.showError('http', error);
            }
        });
    };
    LprDivision01ViewDatasource.prototype.setUnderHiddenFilterFields = function () {
        this._UnderHiddenFilterFields = [];
        var m2cKeyfm = this.frmRootSrv.getm2cKeyfm();
        var m2cfm = this.frmRootSrv.getm2cfm();
        if (typeof this._HiddenFilter === 'undefined')
            return;
        if (this._HiddenFilter === null)
            return;
        for (var i in this._HiddenFilter) {
            for (var j in this._HiddenFilter[i]) {
                if (Object.keys(m2cKeyfm).indexOf(i) > -1) {
                    if (Object.keys(m2cKeyfm[i]).indexOf(j) > -1) {
                        for (var k in m2cKeyfm[i][j]) {
                            this._UnderHiddenFilterFields.push(m2cKeyfm[i][j][k].propNm);
                        }
                    }
                }
                if (Object.keys(m2cfm).indexOf(i) > -1) {
                    if (Object.keys(m2cfm[i]).indexOf(j) > -1) {
                        for (var k in m2cfm[i][j]) {
                            this._UnderHiddenFilterFields.push(m2cfm[i][j][k]);
                        }
                    }
                }
            }
        }
    };
    LprDivision01ViewDatasource.prototype.isUnderHiddenFilterFields = function (fld) {
        if (typeof fld === 'undefined')
            return false;
        if (fld === null)
            return false;
        return this._UnderHiddenFilterFields.indexOf(fld) > -1;
    };
    LprDivision01ViewDatasource.prototype.updateByHiddenFilterFields = function (doNotify) {
        if (doNotify === void 0) { doNotify = true; }
        var hasChanged = false;
        var aftrMstrChngd = false;
        if (typeof this._HiddenFilter === 'undefined')
            return hasChanged;
        if (this._HiddenFilter === null)
            return hasChanged;
        var m2cKeyfm = this.frmRootSrv.getm2cKeyfm();
        for (var i in this._HiddenFilter) {
            if (Object.keys(m2cKeyfm).indexOf(i) > -1) {
                for (var j in this._HiddenFilter[i]) {
                    if (Object.keys(m2cKeyfm[i]).indexOf(j) > -1) {
                        for (var k in this._HiddenFilter[i][j]) {
                            if (Object.keys(m2cKeyfm[i][j]).indexOf(k) > -1) {
                                var src = this._HiddenFilter[i][j][k];
                                if (!this.isEqual(this.getValue(m2cKeyfm[i][j][k].propNm), this._HiddenFilter[i][j][k])) {
                                    this.setValue(m2cKeyfm[i][j][k].propNm, this._HiddenFilter[i][j][k]);
                                    aftrMstrChngd = (this._CurrentlyDirectMasterNavs.indexOf(j) >= 0) || aftrMstrChngd;
                                    hasChanged = true;
                                }
                            }
                        }
                    }
                }
            }
        }
        if (!hasChanged)
            return hasChanged;
        if (doNotify)
            this.doEmitEvent(aftrMstrChngd);
        return hasChanged;
    };
    LprDivision01ViewDatasource.prototype.getIsNew = function () {
        return this._IsNew;
    };
    LprDivision01ViewDatasource.prototype.setIsNew = function (v) {
        this._IsNew = v;
    };
    LprDivision01ViewDatasource.prototype.isReadonlyValue = function (key) {
        var rslt = this.dbgeneratedValue(key);
        if (!rslt)
            rslt = this.isUnderHiddenFilterFields(key);
        if ((!rslt) && (!this.getIsNew())) {
            rslt = this.frmRootSrv.isInPrimkeyValue(key);
        }
        return rslt;
    };
    return LprDivision01ViewDatasource;
}());
exports.LprDivision01ViewDatasource = LprDivision01ViewDatasource;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=lpr-division01-view-datasource.class.js.map