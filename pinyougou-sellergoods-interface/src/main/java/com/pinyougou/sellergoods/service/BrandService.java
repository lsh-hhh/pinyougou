package com.pinyougou.sellergoods.service;

import java.util.List;

import com.pinyougou.pojo.TbBrand;

import entity.PageResult;

/**
 * 
 * @author LSH
 *   品牌列表
 *
 */
public interface BrandService {
	
	public List<TbBrand> findAll();
	
	/**
	 * 分页
	 * @param pageNum
	 * @param pageSize
	 * @return
	 */
	public PageResult findPage(int pageNum, int pageSize);
	
	public void addBrand(TbBrand brand);
	
	public void update(TbBrand brand);
	
	public TbBrand findOne(Long id);
	
	public void delete(Long[] ids);
	
	public PageResult findPage(TbBrand brand, int pageNum, int pageSize);
}
